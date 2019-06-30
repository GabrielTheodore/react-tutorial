import React from 'react'
import Core from '../components/Core'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
export default function Error(){
    return <Core>
        <Banner title='404' subtitle='Page Not Found'>
            <Link to='/' className='btn-primary'>
                Return Home
            </Link>
        </Banner>
   </Core>
}