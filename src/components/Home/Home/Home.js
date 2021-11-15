import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Reviews></Reviews>
            <Services></Services>
        </div>
    );
};

export default Home;