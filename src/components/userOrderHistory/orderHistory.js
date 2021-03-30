import React, { Component } from 'react'
import './orders.css'
import Navbar from '../userNavbar/Navbar'

class orderHistory extends Component {
    constructor(props)
    {
        super(props)
        this.state ={
            orders : [
                {ProductName : 1, Price : 10, Quantity : 20 , TotalPrice : 100},
                {ProductName : 1, Price : 10, Quantity : 20 , TotalPrice : 100},
                {ProductName : 1, Price : 10, Quantity : 20 , TotalPrice : 100},
                {ProductName : 1, Price : 10, Quantity : 20 , TotalPrice : 100}
            
                
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
               
            </tr>
        )
    })
}
renderTableHeader()
{
    let header = Object.keys(this.state.orders[0])
    return header.map((key,index)=>{
        return <th key={index}>{key}</th>
    })
}
    render() {
        return (
            <div >
                <Navbar/>
                <table id='furnitureOrder'>
                    <tbody >
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default orderHistory
