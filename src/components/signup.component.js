import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../login.css';
import Navbar from './userNavbar/Navbar';
export default class SignUp extends Component {

    render() {
        return (
            <div>
            <Navbar/>
            <div class="auth-wrapper">
                <div class="auth-inner">
                <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input id="email" type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input id="username" type="text" className="form-control" placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text" id="mobilenumber" className="form-control" placeholder="Enter Mobile Number" />
                </div>

                

                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Re-enter Password</label>
                    <input id="confirmpassword" type="password" className="form-control" placeholder="Confirm password" />
                </div>
                <br></br>
                <button id="submitButton" type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <br></br>
                <div class="text-center" >
                <a href="/login" id="signinLink" >Already a member?Click here</a>
            </div>
            </form>
            </div>
            </div>
            </div>
        );
    }
}