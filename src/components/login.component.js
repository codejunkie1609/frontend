import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'
import '../login.css'
export default class Login extends Component {
    login()
    {
       const em = document.getElementById("email").value
       const ps = document.getElementById("password").value
      // alert(em+" "+ps)
        axios.post('',JSON.stringify({
            email:em,
            password:ps
        }
        )).then(response => {
            console.log(response)
        }).catch(e=>{
            console.log(e)
        })
    }
    render() {
        return (
            <div class="auth-wrapper" id="loginBox">
                <div  class="auth-inner">
                            <form onSubmit={()=>this.login()}>
                                <h3>Sign In</h3>

                                <div className="form-group" >
                                    <label>Email address</label>
                                    <input id="email" type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input id="password" type="password" className="form-control" placeholder="Enter password" />
                                </div>

                                

                                <button id="submitButton" type="submit" className="btn btn-primary btn-block">Submit</button>
                            
                            </form>
                            <br></br>
                                <div class="text-center" >
                                <a href="/sign-up" id="signupLink" >New user? click here</a>
                        </div>
                </div>
            </div>
        );
    }
}