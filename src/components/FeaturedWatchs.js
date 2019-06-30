import React, {Component} from 'react'
import {WatchContext} from '../Context'
import Loading from './Loading'
import Watch from './Watch'
import Title from './Title'
export default class FeaturedWatchs extends Component{
    static contextType = WatchContext
    render(){
        let {loading, featuredWatchs:watchs} = this.context
        watchs = watchs.map( watch => {
            return <Watch key={watch.id} watch={watch}/>
        })

        return(
            <section className="featured-rooms">
                <Title title="Featured Watchs"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:watchs}    
                </div>
            </section>
        )
    }
}