import React from 'react'
import{useContext} from 'react'
import{WatchContext} from '../Context'
import Title from './Title'
// get all unique values
const getUnique = (item, value)=>{
    return[...new Set(item.map(item=> item[value]))]
}
export default function WatchFilter({watchs}){
    const context = useContext(WatchContext)
    const{handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize, breakfast,pets}=context
    //get unique types
    let types= getUnique(watchs, 'type')
    //add all
    types = ['all',...types]
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let people= getUnique(watchs, 'capacity')
    people = people.map((item, index)=>{
        return <option key={index} value={item} >{item}</option>
    })
    return<section className='filter-container'>
        <Title title="Search Rooms"/>
        <form className='filter-form'>
            {/*select type*/}
                <div className = 'form-group'>
                    <label htmlFor="type">Room Type</label>
                    <select name = 'type' id="type" value={type} className='form-control' onChange={handleChange}>
                    {types}
                    </select>
                </div> 
            {/*end select type*/}
             {/*guest*/}
                <div className = 'form-group'>
                    <label htmlFor="capacity">Guest</label>
                    <select name = 'capacity' id="capacity" value={capacity} className='form-control' onChange={handleChange}>
                    {people}
                    </select>
                </div> 
            {/*end select type*/}
            {/*Room Price */}
                <div className = 'form-group'>
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range" name ="price" min={minPrice} max= {maxPrice}
                    id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
            {/*Room Price */}
            {/*extras */} 
                <div className = 'form-group'>
                    <div className = "single-extra">
                        <input type="checkbox" name ="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor ="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name ="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor ="pets">Pets</label>
                    </div>
                </div>
            {/*Room Price */}
        </form>
    </section>
}