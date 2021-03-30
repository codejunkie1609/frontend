import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../home.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './userNavbar/Navbar';
class Home extends Component {
    
    render() {
        return(
            <div>
                <Navbar/>
                <div>
                   <div id="auth-inner">
                    <h1>WELCOME HOME</h1>
                    </div>
                </div>

                <div class="wrapper">
                        <div class="product_wrap">
                        <div class="product_item">
                                <div class="img">
                                <img src="./images/chair.jpg"></img>
                                <p class="brand_name">H & M Round Neck</p>
                                </div>
                                <div class="size_color">
                                </div>
                                <div class="price">
                                    <p>$12</p>
                                </div>
                        </div>
                        <div class="product_item">
                                <div class="img">
                                <img src="./images/chair.jpg"></img>
                                <p class="brand_name">H & M Round Neck</p>
                                </div>
                                <div class="size_color">
                                </div>
                                <div class="price">
                                    <p>$12</p>
                                </div>
                        </div>
                        <div class="product_item">
                                <div class="img">
                                <img src="./images/chair.jpg"></img>
                                <p class="brand_name">H & M Round Neck</p>
                                </div>
                                <div class="size_color">
                                </div>
                                <div class="price">
                                    <p>$12</p>
                                </div>
                        </div>
                        <div class="product_item">
                                <div class="img">
                                <img src='./src/images/back.jpg' alt="Furniture here"/>
                                <p class="brand_name">H & M Round Neck</p>
                                </div>
                                <div class="size_color">
                                </div>
                                <div class="price">
                                    <p>$12</p>
                                </div>
                        </div>
                        <div class="product_item">
                                <div class="img">
                                <img src="C:\Users\sri charan\Desktop\REACT\hello-world\src\components\chair.jpg"></img>
                                <p class="brand_name">H & M Round Neck</p>
                                </div>
                                <div class="size_color">
                                </div>
                                <div class="price">
                                    <p>$12</p>
                                </div>
                        </div>
                        <div class="product_item">
                                <div class="img">
                                <img src="C:\Users\sri charan\Desktop\REACT\hello-world\src\components\chair.jpg"></img>
                                <p class="brand_name">H & M Round Neck</p>
                                </div>
                                <div class="size_color">
                                </div>
                                <div class="price">
                                    <p>$12</p>
                    </div>
             </div>
           
        </div>
</div>

                </div>
        )

    }
}
export default Home


