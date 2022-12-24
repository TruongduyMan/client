import React from 'react'
import { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = () => {
    const [selectImg, setSelectImg] = useState(0);

    const image = [
        "https://i.pinimg.com/564x/1a/2b/b1/1a2bb18f1d3b02d05c6cdfdabda3f645.jpg",
        "https://i.pinimg.com/564x/63/64/bc/6364bc327cf8c6ea052eabdb84d539cc.jpg",
        "https://i.pinimg.com/564x/d4/86/a6/d486a68cf69911895296f83dd5728d38.jpg",
    ];

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={image[0]} alt="" onClick={e => setSelectImg(0)}/>
                    <img src={image[1]} alt="" onClick={e => setSelectImg(1)}/>
                    <img src={image[2]} alt="" onClick={e => setSelectImg(2)}/>
            
                </div>
                
                <div className="mainImg">
                    <img src={image[selectImg]} alt="" />
                </div>
            </div>
            
            <div className="right">
                <h1>SWEATER SLEEVE</h1>

                <h2>$18</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Sed distinctio saepe ipsa eligendi blanditiis tempora veritatis, 
                    inventore architecto facilis dignissimos, velit nulla dicta repudiandae animi eos, 
                    dolorum in voluptatibus ipsum!
                </p>
                <button>
                    ADD TO CART
                    <AddShoppingCartIcon/>
                </button>
            </div>
        </div>
    )
};

export default Product;

