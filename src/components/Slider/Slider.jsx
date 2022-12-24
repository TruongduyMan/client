import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Slider.scss";
import { useState } from "react";


const Slider = () =>{
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://www.fashiongonerogue.com/wp-content/uploads/2020/08/Women-Red-Pantsuit-Heels-Outside.jpg",
        "https://media.glamour.com/photos/5e7bf8766a2fa300087f0786/master/pass/GettyImages-1210591136.jpg",
        "https://www.stylebysavina.com/wp-content/uploads/2021/06/fall-outfits-for-women-2021-1024x683.png"
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