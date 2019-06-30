import React, { Component } from "react";
import defaultBcg from '../images/room-1.jpeg'
import Core from '../components/Core'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import{WatchContext} from '../Context'
import StyledCore from '../components/StyledCore'
export default class Watch extends Component{
    constructor(props){
        super(props)
        //console.log(this.props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType=WatchContext;
   // componentDidMount(){}
    render(){
        const{getWatch}= this.context
        const watch = getWatch(this.state.slug)
        if(!watch)
        {
            return <div className="error">
                <h3>no such watch could be found</h3>
                <Link to='/Product' className='btn-primary'>
                    back to product
                </Link>
            </div>
        }
        const{name,description,capacity,size,price,extras,breakfast,pets,images} = watch
        return(
        <>
        <StyledCore img={images[0] || this.state.defaultBcg}>
            <Banner title={`${name}`}>
                <Link to='/Product' className='btn-primary'>
                    back to product
                </Link>
            </Banner>
        </StyledCore>
        <section className ='single-room'>
            <div className = 'single-room-images'>
                {images.map((item, index)=>{
                    return <img key={index} src={item} alt={name}/>
                })}
            </div>
            <div className='single-room-info'>
                <article className='desc'>
                    <h3>Details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>Info</h3>
                    <h6>Price : ${price}</h6>
                    <h6>Size  : {size} SQFT</h6>
                    <h6>Max Capacity : {
                            capacity >1 ?`${capacity} People` : `${capacity} Person`
                        }
                    </h6>
                    <h6>{pets ? "Pets Allowed":"No Pets Allowed"}</h6>
                    <h6>{breakfast && "Free Breakfast Included"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>Extras</h6>
            <ul className = "extras">
                {extras.map((item, index)=>{
                    return <li key={index}>-{item}</li>
                })}
            </ul>
        </section>
        </>
        );
    }
}