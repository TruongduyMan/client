import React from "react";
import Card from "../Card/Card";
import "./FeatureProducts.scss";


const FeatureProducts = ({type}) =>{
    const data = [
        {
            id:1,
            img:"https://i.pinimg.com/564x/9c/25/d6/9c25d6c36df14745ec405223ef3fb1e5.jpg",
            img2:"https://i.pinimg.com/564x/6f/c5/f9/6fc5f9acb2e4c90e34ee286597628f8e.jpg",
            title:"Neve Top",
            isNew: true,
            oldPrice:20,
            newPrice: 18,
        },
        
        {
            id:2,
            img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1666031636-nasty-gal-v-neck-loose-fit-sweater-vest-1666031626.jpg?crop=1xw:1xh;center,top&resize=480:*",
            img2:"https://i.pinimg.com/564x/dc/80/22/dc8022823e66c9c7d1ce08d5d16ba1d3.jpg",
            title:"Sweater Vest",
            isNew: true,
            oldPrice: 25,
            newPrice: 14,
        },
        {
            id:3,
            img:"https://file.hstatic.net/1000197303/file/s1_b42b6470329348528c84f5d2e936e57d.jpg",
            img2:"https://i.vietgiaitri.com/2018/10/14/cac-cach-phoi-do-voi-ao-so-mi-trang-cho-ban-nu-xinh-dep-tu-tin-4a84b8.jpg",
            title:"Shirt",
            isNew: true,
            oldPrice: 35,
            newPrice: 24,
        },
        {
            id:4,
            img:"https://i.pinimg.com/564x/4a/18/54/4a1854de414b65015020d0b28f857256.jpg",
            title:"Hat",
            isNew: true,
            oldPrice: 18,
            newPrice: 12,
        },
        
    ];
    
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
                    <Card item={item} key={item}/>
                ))}
            </div>
        </div>
    )
};

export default FeatureProducts;