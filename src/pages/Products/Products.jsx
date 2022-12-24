import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import "./Products.scss";

const Products = () => {
    
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);

    const [sort, setSort] = useState(null);
    
    return (
        <div className='products'>
            <div className="left">
                <div className="filterItems">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="1" value={1} />
                        <label htmlFor="1">T-shirt</label>
                    </div>

                    <div className="inputItem">
                        <input type="checkbox" name="" id="2" value={2} />
                        <label htmlFor="2">Skirt</label>
                    </div>

                    <div className="inputItem">
                        <input type="checkbox" name="" id="3" value={3} />
                        <label htmlFor="3">Coasts</label>
                    </div>
                    
                    <div className="inputItem">
                        <input type="checkbox" name="" id="4" value={4} />
                        <label htmlFor="4">Shoes</label>
                    </div>
                    
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
                <img className="categoryImg" src="https://images8.alphacoders.com/422/422001.jpg" alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
            
        </div>
    )
};

export default Products;
