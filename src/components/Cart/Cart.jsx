import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss";

const Cart = () =>{
    const data = [
        {
            id:1,
            img:"https://i.pinimg.com/564x/1a/2b/b1/1a2bb18f1d3b02d05c6cdfdabda3f645.jpg",
            title:"Neve Top",
            desc: "Neve Top, T-Shirt",
            isNew: true,
            oldPrice: "$20",
            newPrice: "$18",
        },
    ];

    return (
        <div className="cart">
            <h1>YOUR CART</h1>
            {data.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">1 x {item.newPrice}</div>
                    </div>
                    <DeleteOutlineIcon className="delete"/>
                </div>
            ))}
            
            <div className="total">
                <span>TOTAL</span>
                <span>$123</span>
            </div>
            <button>CHECK OUT</button>
            <span className="reset">RESET</span>
        </div>

    );
};

export default Cart;