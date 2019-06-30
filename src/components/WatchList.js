import React from 'react'
import Watch from './Watch'
export default function WatchList({watchs}){
    if(watchs.length ===0){
        return(
        <div className ="empty-search">
        <h3>Unfortunately no Watch matched your search parameters</h3>
        </div>)
    }
    return (
    <section className='roomslist'>
        <div className='roomslist-center'>
            {
                watchs.map(item =>{
                    return<Watch key={item.id} watch={item}/>
                })
            }
        </div>
    </section>)
}