import React from 'react';
import { Helmet } from 'react-helmet-async';
import FeaturedRealEstate from '../../components/featured-real-estate/FeaturedRealEstate';
import WhyChooseUs from '../../components/why-choose-us/WhyChooseUs';
import NeighborhoodGuides from '../../components/neighborhood-guides/NeighborhoodGuides';
import ReadyToSell from '../../components/ready-to-sell/ReadyToSell';
import HeroCarousel from '../../components/hero-carousel/HeroCarousel';

const Home = () => {


    return (
        <>
            <Helmet>
                <title>HomeNest | Home</title>
            </Helmet>

            <FeaturedRealEstate />
            <WhyChooseUs />
            <NeighborhoodGuides />
            <ReadyToSell />
        </>
    );
};

export default Home;