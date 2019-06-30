import React from 'react'
import WatchFilter from './WatchFilter'
import WatchList from './WatchList'
import{withWatchConsumer} from '../Context'
import Loading from './Loading'

function WatchContainer({context}){
const{loading,sortedWatchs,watchs} = context
if(loading){
    return<Loading/>
    }
    return(
        <>
        <WatchFilter watchs={watchs}/>
        <WatchList watchs={sortedWatchs}/>
        </>)

}

export default withWatchConsumer(WatchContainer)

// import React from 'react'
// import WatchFilter from './WatchFilter'
// import WatchList from './WatchList'
// import{WatchConsumer} from '../Context'
// import Loading from './Loading'

// export default function WatchContainer(){
//     return(
//         <WatchConsumer>
//             {value=>{
//                     const{loading,sortedWatchs,watchs} = value
//                     if(loading){
//                         return<Loading/>
//                     }
//                     return(
//                     <div>
//                         hello from room Container
//                         <WatchFilter watchs={watchs}/>
//                         <WatchList watchs={sortedWatchs}/>
//                     </div>)
//                     }
//                 }   
//         </WatchConsumer>
//     )
// }