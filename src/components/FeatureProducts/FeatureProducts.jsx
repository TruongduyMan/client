import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeatureProducts.scss";
import axios from 'axios';

const FeatureProducts = ({type}) =>{
       
const [data, setData] = useState([]);

useEffect(() =>{
    const fetchData = async() =>{
        try {
            const res = await axios.get(process.env.REACT_APP_API_URL + "/products", {
                headers:{Authorization:"bearer" + process.env.REACT_APP_API_TOKEN,}
            });
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, []);

    return (
        <div className="featureProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius architecto nisi, officia commodi molestiae quis iste fuga accusamus fugiat, 
                    saepe rem corrupti. 
                    Explicabo, a ipsum eius ipsam tempore molestias quisquam.</p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
};

export default FeatureProducts;