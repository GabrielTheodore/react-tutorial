import React from 'react'
import {Link} from 'react-router-dom'
import defaultimg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'
export default function Watch({watch}){
    const{name,slug,images,price}=watch;
    
    return(
        <article className="room">
            <div className="img-container">
                <img src ={images[0] || defaultimg} alt="single room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>Per Piece</p>
                </div>
                <Link to={`/Product/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Watch.propTypes = {
    watch:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}
