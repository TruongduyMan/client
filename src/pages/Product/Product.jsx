import React from 'react'
import { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const id = useParams().id;

    const [selectImg, setSelectImg] = useState("img");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const {data, loading, error} = useFetch(`/products/${id}?populate=*`
    
    );

    return (
        <div className='product'>
            {loading 
            ?("loading") 
            : error 
            ? "Something went wrong?" : (<><div className="left">
                <div className="images">
                    <img 
                    src={process.env.REACT_APP_API_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectImg("img")}/>
                    <img 
                    src={process.env.REACT_APP_API_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectImg("img2")}/>
                    <img 
                    src={process.env.REACT_APP_API_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectImg("img3")}/>
                    <img 
                    src={process.env.REACT_APP_API_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectImg("img4")}/>
                </div>
                
                <div className="mainImg">
                    <img 
                    src={process.env.REACT_APP_API_UPLOAD_URL + data?.attributes[selectImg]?.data?.attributes?.url} alt="" />
                </div>
            </div>
            
            <div className="right">
                <h1>{data?.attributes?.title}</h1>

                <span className='price'>${data?.attributes?.price}</span>
                
                <p>{data?.attributes?.description}</p>

                <div className="quantity">
                    <button onClick={() => setQuantity((prev)=> prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className='add' onClick={()=> dispatch(addToCart({
                    id:data.id,
                    title:data.attributes.title,
                    description:data.attributes.description,
                    price:data.attributes.price,
                    img:data.attributes.img.data.attributes.url,
                    quantity,
                }))}>
                    ADD TO CART
                    <AddShoppingCartIcon/>
                </button>
                <div className="links">
                    <div className="item">
                        ADD TO WISH LIST
                        <FavoriteBorderIcon/>
                    </div>
                    <div className="item">
                        ADD TO COMPARE
                        <BalanceIcon/>
                    </div>
                </div>
                
                <div className="info">
                    <span>Vendor : {data?.attributes?.title}</span>
                    <span>Product-Type : {data?.attributes?.type}</span>
                    <span>Tag : {data?.attributes?.category}</span>
                </div>
                <hr/>
                <div className="details">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFOMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>
            </div></>
            )}
        </div>
    )
};

export default Product;

