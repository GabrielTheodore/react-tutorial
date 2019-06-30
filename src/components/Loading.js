import React from 'react'
import loadinggif from'../images/gif/loading-gear.gif'
export default function Loading(){
    return(
        <div className="loading">
            <h4>Watchs data loading</h4>
            <img src={loadinggif} alt=""/>
        </div>
    )
}