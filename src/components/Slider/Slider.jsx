import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Slider.scss";
import { useState } from "react";


const Slider = () =>{
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://initiate.alphacoders.com/images/107/stretched-1920-1080-1076577.jpg?310",
        "https://images2.alphacoders.com/190/190302.jpg",
        "https://initiate.alphacoders.com/images/337/stretched-1920-1080-337135.jpg?2943"
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