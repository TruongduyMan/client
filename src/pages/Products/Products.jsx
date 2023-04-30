import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import "./Products.scss";
import useFetch from '../../hooks/useFetch';

const Products = () => {

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [sort, setSort] = useState(null);

    const {data, loading, error} = useFetch(`/sub-categories/?[filters][categories][id][$eq]=${catId}`);
    
    const handleChange = (e) =>{
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCategories(isChecked 
            ? [...selectedSubCategories, value] 
            : selectedSubCategories.filter(item=>item !== value))
    };

    return (
        <div className='products'>
            <div className="left">
                <div className="filterItems">

                    <h2>Product Categories</h2>
                    {data?.map(item=>(
                        <div className="inputItem" key={item.id} onChange={handleChange}>
                            <input type="checkbox" name="" id={item.id} value={item.id} />
                            <label htmlFor="1">{item.attributes.title}</label>
                        </div>
                    ))}

                    
                    
                </div>
                <div className="filterItems">
                    <h2>Filter By Price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" name="" id="" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItems">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" name="price" id="asc" value="asc" onChange={(e) => setSort("asc")}/>
                        <label htmlFor='asc'>Price - Lowest First</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="price" id="desc" value="desc" onChange={(e) => setSort("desc")}/>
                        <label htmlFor='desc'>Price - Highest First</label>
                    </div>
                    
                </div>
            </div>

            <div className="right">
                <img className="categoryImg" src="https://images.alphacoders.com/125/1255296.png" alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCategories}/>
            </div>
            
        </div>
    )
};

export default Products;
