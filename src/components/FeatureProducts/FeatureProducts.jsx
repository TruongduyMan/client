import React from "react";
import Card from "../Card/Card";
import "./FeatureProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeatureProducts = ({type}) =>{
    
    const {data, loading, error} = useFetch(`http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`);

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
                {error 
                ? "Something went wrong :(" 
                : loading 
                ? "loading" 
                : data?.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
};

export default FeatureProducts;