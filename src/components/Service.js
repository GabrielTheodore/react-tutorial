import React, {Component} from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component{
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Garansi",
                info:"kami menyediakan garansi selama 4 tahun"
            },
            {
                icon:<FaHiking/>,
                title:"Strap",
                info:"tali jam tangan kulit, nylon, karet/rubber kualitas asli dengan harga terbaik di Indonesia"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Watch Winder",
                info:"Watch Winder adalah sebuah perangkat elektronik yang berfungsi untuk memutar jam tangan Automatic saat jam sedang tidak dipakai."
            },
            {
                icon:<FaBeer/>,
                title:"Watch Box",
                info:"Machtwatch menyediakan kotak jam tangan guna menyimpan jam tangan kesayangan Anda." 
            }
        ]
    }
    render(){
        return(
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return (<article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>);
                    })}
                </div>
            </section>
        )
    }
}