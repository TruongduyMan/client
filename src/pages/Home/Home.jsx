import React from 'react'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts';
import Slider from '../../components/Slider/Slider';
import "./Home.scss";

const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <FeatureProducts type="feature"/>
            <FeatureProducts type="trending"/>
        </div>
    )
};

export default Home;
