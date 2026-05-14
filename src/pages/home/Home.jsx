import React from 'react';
import { Helmet } from 'react-helmet-async';
import FeaturedRealEstate from '../../components/featured-real-estate/FeaturedRealEstate';
import WhyChooseUs from '../../components/why-choose-us/WhyChooseUs';

const Home = () => {


    return (
        <>
            <Helmet>
                <title>HomeNest | Home</title>
            </Helmet>

            <FeaturedRealEstate />
            <WhyChooseUs />
        </>
    );
};

export default Home;