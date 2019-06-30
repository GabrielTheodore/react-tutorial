import React from 'react'
import Core from '../components/Core'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import WatchContainer from '../components/WatchContainer'
const Products =()=>{
    return (
    <>
        <Core core="roomsHero">
            <Banner title='Our Product'>
                <Link to='/' className='btn-primary'>
                    Return Home
                </Link>
            </Banner>
        </Core>
        <WatchContainer></WatchContainer>
    </>
    )
}
export default Products