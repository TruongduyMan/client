import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () =>{
    return(
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://i.pinimg.com/564x/be/e2/26/bee226fc3b1bc552e1eb605a8ccd1437.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Group-Buy</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://i.pinimg.com/564x/d3/d3/0c/d3d30c9873dadcea10f77111d7a9f99d.jpg" alt=""/>
                    <button>
                        <Link className="link" >Keyboard</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://i.pinimg.com/564x/4c/b8/21/4cb821f5da615f7e7da101338dfa4d78.jpg" alt=""/>
                    <button>
                    <Link className="link" >Switch</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        
                        <div className="row">
                            <img src="https://i.pinimg.com/564x/04/51/ab/0451ab29b1bc783ed5136ec465f14eca.jpg" alt=""/>
                            <button>
                            <Link className="link" >Keycap</Link>
                            </button>

                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="row">
                        <img src="https://i.pinimg.com/564x/ad/84/a6/ad84a6b2a03ce9a4cd75f896c8279e48.jpg" alt=""/>
                    <button>
                    <Link className="link" >Accessories</Link>
                    </button>
                        </div>
                    </div>
                
                </div>
                <div className="row">
                <img src="https://i.pinimg.com/564x/d3/ef/15/d3ef15499b8a233afefd8721cd36f664.jpg" alt=""/>
                    <button>
                    <Link className="link" >Service</Link>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Categories;