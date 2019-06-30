import React from "react";
import Core from "../components/Core";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Service"
import FeaturedWatchs from "../components/FeaturedWatchs"
import Button from '../components/StyledCore'
export default function Home() {
    return (
        <>
            <Core>
                <Banner title="Luxurious watch" subtitle="price starting at $120">
                    <Link to="/Product" className="btn-primary">
                        Return to Product
                    </Link>
                </Banner>
            </Core>
            <Services />
            <FeaturedWatchs />
        </>
    )
}