import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import '../login.css'
import Navbar from './adminNavbar/Navbar';
class Admin extends Component {
    render() {
        return (
            <div>
                    <Navbar/>
                    <div class="auth-wrapper">
                        <div class="auth-inner">
                        <form>
                        <h3>ADD A NEW PRODUCT</h3>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input id="furnitureName" type="text" className="form-control" placeholder="Enter product name" />
                        </div>
                        <div className="form-group">
                            <label>Furniture Price</label>
                            <input id="furniturePrice" type="number" className="form-control" placeholder="Enter product price" />
                        </div>

                        <div className="form-group">
                            <label>Product Description</label>
                            <input type="text" id="furnitureDescription" className="form-control" placeholder="Enter product description" />
                        </div>

                        

                        <div className="form-group">
                            <label>Image url</label>
                            <input id="furnitureImageURL" type="url" className="form-control" placeholder="Enter image url" />
                        </div>
                        <div className="form-group">
                            <label>Furniture Quanitty</label>
                            <input id="furnitureQuantity" type="number" className="form-control" placeholder="Enter furniture quantity" />
                        </div>
                        <br></br>
                        <button id="addFurnitureButton" type="submit" className="btn btn-primary btn-block">ADD</button>
                        
                    </form>
                    </div>
                    </div>
            </div>
            
        )
    }
}

export default Admin
