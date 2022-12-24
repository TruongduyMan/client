import React from "react";
import "./Contact.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () =>{
    return (
        <div className="contact">
            <div className="wrapper">
                <span>FOR MORE INFORMATION:</span>
                <div className="mail">
                    <input type="text" placeholder="Enter your email..."/>
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <PinterestIcon/>
                    <YouTubeIcon/>
                    <TwitterIcon/>
                </div>
            </div>
        </div>
    )
};

export default Contact;