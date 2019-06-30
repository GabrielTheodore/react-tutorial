import React, {Component} from 'react'
//import items from './data'
import Client from './contentful'

const WatchContext = React.createContext();
// <WatchContext.Provider value={'hello'}
class WatchProvider extends Component{
    state={
        watchs:[],
        sortedWatch:[],
        featuredWatchs:[],
        loading: true,
        type: 'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };
    getData=async() =>{
        try{
            let response = await Client.getEntries({
                content_type:"firstprojectBeachresort",
                order:"sys.createdAt"
            })
            let watchs =this.formatData(response.items)
            let featuredWatchs = watchs.filter(watch => watch.featured === true);
            let maxPrice = Math.max(...watchs.map(item=> item.price))
            let maxSize = Math.max(...watchs.map(item=> item.size))
            this.setState({
                watchs, 
                featuredWatchs,
                sortedWatchs:watchs, 
                loading:false,
                price: maxPrice,
                maxPrice,
                maxSize
            })
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getData()
    }

    formatData(items){
        let tempItems = items.map(item=>{
            let id= item.sys.id
            let images = item.fields.images.map(image=>image.fields.file.url)
            let watch ={...item.fields, images:images, id}
            return watch;
        })
        return tempItems
    }
    getWatch = (slug) =>{
        let tempWatchs = [...this.state.watchs]
        const watch = tempWatchs.find(watch=> watch.slug===slug)
        return watch
    }
    handleChange =event => {
        const target = event.target
        const value = target.type==='checkbox' ?target.checked:target.value
        const name = event.target.name
        this.setState({
            [name]:value
        },this.filterWatchs)
    }
    filterWatchs = () =>{
        let{
            watchs, type, capacity,price,minSize,maxSize,breakfast,pets
        }=this.state
        let tempWatchs = [...watchs]
        capacity = parseInt(capacity)
        price = parseInt(price)

        if(type !== 'all'){
            tempWatchs = tempWatchs.filter(watch => watch.type === type)
        }

        if(capacity!==1){
            tempWatchs=tempWatchs.filter(watch =>watch.capacity>=capacity)
        }

        tempWatchs=tempWatchs.filter(watch=> watch.price<= price)
        
        if(breakfast){
            tempWatchs=tempWatchs.filter(watch=>watch.breakfast === true)
        }
        
        if(pets){
            tempWatchs=tempWatchs.filter(watch=>watch.pets === true)
        }

        this.setState({
            sortedWatchs:tempWatchs
        })
    }
    render(){
        return(
        <WatchContext.Provider value={{...this.state, getWatch:this.getWatch, handleChange:this.handleChange}}>
            {this.props.children}
        </WatchContext.Provider>
        );
    }
}

const WatchConsumer = WatchContext.Consumer;

export function withWatchConsumer(Component){
    return function ConsumerWrapper(props){
        return <WatchConsumer>
            {value=> <Component {...props} context = {value}/> }
        </WatchConsumer>
    }
}

export {WatchProvider, WatchConsumer, WatchContext};