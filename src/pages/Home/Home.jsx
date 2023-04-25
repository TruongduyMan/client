import React from 'react'
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts';
import Slider from '../../components/Slider/Slider';
import "./Home.scss";

const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <FeatureProducts type="feature"/>
            <Categories/>
            <FeatureProducts type="group-by"/>
            <Contact/>
        </div>
    )
};

export default Home;
