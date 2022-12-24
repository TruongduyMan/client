import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () =>{
    return(
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://i1.wp.com/www.girlsharestips.com/wp-content/uploads/2021/05/White-Pants-Outfit-1.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://i.pinimg.com/564x/17/50/a7/1750a748c8e2684508cab8228a114956.jpg" alt=""/>
                    <button>
                        <Link className="link" >Woman</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://i.pinimg.com/564x/41/d0/6e/41d06e94d972bd1cc158a618c0c8ea92.jpg" alt=""/>
                    <button>
                    <Link className="link" >New Season</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        
                        <div className="row">
                            <img src="https://www.outfit-styles.com/wp-content/uploads/2020/07/Casual-Men-Outfit-Idea.jpg" alt=""/>
                            <button>
                            <Link className="link" >Men</Link>
                            </button>

                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="row">
                        <img src="https://i.pinimg.com/736x/7d/9a/54/7d9a54aa09a1f8fe3a0bf8c4d0b20686.jpg" alt=""/>
                    <button>
                    <Link className="link" >Accessories</Link>
                    </button>
                        </div>
                    </div>
                
                </div>
                <div className="row">
                <img src="https://i.pinimg.com/564x/53/2c/8d/532c8ddf97850cfb3d037eb03c296104.jpg" alt=""/>
                    <button>
                    <Link className="link" >Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Categories;