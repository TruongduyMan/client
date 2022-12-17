import React from "react";
import "./Footer.scss"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                
                <div className="item">
                    <h1>Category</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessory</span>
                    <span>New Arrivals</span>

                </div>
                
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cokkies</span>
                    
                </div>

                <div className="item">
                    <h1>About</h1>
                    <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Omnis nobis quo perferendis animi soluta tempore nostrum earum 
                    odit neque qui maiores corporis reiciendis accusamus, 
                    quaerat quae recusandae corrupti, exercitationem nisi?
                    </span>

                </div>

                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Omnis nobis quo perferendis animi soluta tempore nostrum earum 
                        odit neque qui maiores corporis reiciendis accusamus, 
                        quaerat quae recusandae corrupti, exercitationem nisi?
                    </span>
                    
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                    <span className="logo">CAT SOTRE</span>
                    <sapn className="copyright">© Copyright 2023. All Rights Reserved</sapn>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt=""></img>
                </div>
            </div>
        </div>
    )
};

export default Footer;