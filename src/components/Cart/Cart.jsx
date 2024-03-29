import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js'
import { makeRequest } from "../../makeRequest";

const stripePromise = loadStripe(
    "pk_test_51KZzhCHtqRxwOsjfnR1eBZmZbfh8gIkiZvztH6U80qOwUE9SmidqJ5V7N8NOkBzEo047Z3AbCmdQGIGI7qU6eL3o00N9GxOI6t");
    
const Cart = () =>{
    const products = useSelector(state=>state.cart.products)
    const dispatch = useDispatch();
    const totalPrice = ()=>{
        let total = 0;
        products.forEach(item => {
            total += item.quantity * item.price
            
        });
        return total.toFixed(2); 
    }
    
    
    const handlePayment = async ()=>{
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products, 
            });
            await stripe.redirectToCheckout({ 
                sessionId: res.data.stripeSession.id,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="cart">
            <h1>YOUR CART</h1>
            {products.map((item) => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_API_UPLOAD_URL + item.img} alt="" />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">{item.quantity} x {item.price}</div>
                    </div>
                    <DeleteOutlineIcon className="delete" onClick={()=> dispatch(removeItem(item.id))}/>
                </div>
            ))}
             
            <div className="total">
                <span>TOTAL</span>
                <span>{totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>CHECK OUT</button>
            <span className="reset" onClick={()=> dispatch(resetCart())}>RESET</span>
        </div>

    );
};

export default Cart;