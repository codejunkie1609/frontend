import React, { Component } from 'react'
import './orders.css'
import Navbar from '../adminNavbar/Navbar'

class orderHistory extends Component {
    constructor(props)
    {
        super(props)
        this.state ={
            orders : [
                {orderID : 1, UserID : 10, furnitureName : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' , price : 100, quantity : 20},
                {orderID : 1, UserID : 1, furnitureName : 'abc', price : 100, quantity : 20},
                {orderID : 1, UserID : 1, furnitureName : 'abc', price : 100, quantity : 20},
                {orderID : 1, UserID : 1, furnitureName : 'abc', price : 100, quantity : 20},
                {orderID : 1, UserID : 1, furnitureName : 'abc', price : 100, quantity : 20}
            ]
        }
    }
    renderTableData(){
    return this.state.orders.map((orders, index) => {
        const {orderID,UserID,furnitureName,price,quantity} = orders;
        return (
            <tr key= {orderID}>
                <td>{orderID}</td>
                <td>{UserID}</td>
                <td>{furnitureName}</td>
                <td>{price}</td>
                <td>{quantity}</td>
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
                <div id="adminOrderBody">
                <table id='adminOrder'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default orderHistory
