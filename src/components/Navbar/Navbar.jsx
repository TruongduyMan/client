import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () =>{
    const products = useSelector(state=>state.cart.products)
    const [open, setOpen] = useState(false);

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    
                    <div className="item">
                        <img src="/img/en.png" alt=""></img>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <span>VND</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    
                    <div className="item">
                        <Link className="link" to="/products/1">Keyboard</Link>
                    </div>
                    
                    <div className="item">
                        <Link className="link" to="/products/2">Switch</Link>
                    </div>
                    
                    <div className="item">
                        <Link className="link" to="/products/3">Acesssory</Link>
                    </div>
                    
                    <div className="item">
                        <Link className="link" to="/products/3">Keycap</Link>
                    </div>
                    
                </div>
                
                <div className="center">
                    <Link className="link" to="/">KEEBS SHOP</Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Home Page</Link>
                    </div>
                    
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon/>
                        <PersonOutlineIcon/>
                        <FavoriteBorderIcon/>
                        <div className="cardIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartIcon/>
                            <span>{products.length}</span>
                        </div>
                        
                    </div>
                </div>    
            </div>

            {open && <Cart/>}
        </div>
    )
};

export default Navbar;