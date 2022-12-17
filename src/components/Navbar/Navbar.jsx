import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/vietnam_640.png" alt=""></img>
                        <KeyboardArrowDownIcon/>
                    </div>
                </div>
                <div className="center"></div>
                <div className="right"></div>    
            </div>
        </div>
    )
};

export default Navbar;