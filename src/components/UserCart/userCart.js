import React, { Component } from 'react'
import './userCart.css'
import Navbar from '../userNavbar/Navbar'

export class userCart extends Component {
    constructor(props)
    {
        super(props)
        this.state ={
            orders : [
                {ProductName : 1, Price : 10, Quantity : 20 , TotalPrice : 100, operation:''},
                {ProductName : 1, Price : 10, Quantity : 20 , TotalPrice : 100, operation:''},
                {ProductName : 1, Price : 10, Quantity : 20 , TotalPrice : 100, operation:''},
                {ProductName : 1, Price : 10, Quantity : 20 , TotalPrice : 100, operation:''}
            ]
        }
    }
    renderTableData(){
    return this.state.orders.map((orders, index) => {
        const {ProductName,Price,Quantity,TotalPrice} = orders;
        return (
            <tr key= {ProductName}>
                <td>{ProductName}</td>
                <td>{Price}</td>
                <td>{Quantity}</td>
                <td>{Price*Quantity}</td>
                <button id ="delete" class="btn btn-danger">delete</button>
                
            </tr>
        )
    })
}
renderTableHeader()
{
    let header = Object.keys(this.state.orders[0])
    return header.map((key,index)=>{
      
        return (<th key={index}>{key}</th>)
        

    })
}
    render() {
        return (
            <div >
                <Navbar/>
                <div id="furnitureCartBody">
                <table id='furnitureCart'>
                    <tbody >
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
    
}

export default userCart
