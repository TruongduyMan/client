import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Slider.scss";
import { useState } from "react";


const Slider = () =>{
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://i.redd.it/cfg3c3dhtyb81.jpg",
        "https://product.hstatic.net/200000538213/product/1_3688eff6dba944e188ad2d317984c843.jpg",
        "https://pbs.twimg.com/media/EkTrrfkXcAML7oz.jpg:large"
    ];
    
    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2 :(prev) => prev - 1);
    };

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0 :(prev) => prev + 1);
    };

    return  (
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
                
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIosIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </div>
    )
};

export default Slider;