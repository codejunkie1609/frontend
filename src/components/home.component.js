import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../home.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Home extends Component {
    render() {
        return(
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" >FURNITURE STORE</Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/home"}>HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/cart'} >CART</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/orders'} >MY ORDER</Link>
                                    </li>
                                    <li>
                                    <Link className="nav-link" id="logoutButton" >LOGOUT</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                   <div id="auth-inner">
                    <h1>WELCOME HOME</h1>
                    </div>
                </div>
                <div class="wrapper">
                        <div class="product_wrap">
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

