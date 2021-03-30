import React, { Component } from 'react'
import Navbar from '../adminNavbar/Navbar'
import './adminDashboard.css'
export class adminDashboard extends Component {
    constructor(props)
    {
        super(props)
        this.state ={
            orders : [
                {Image:'',FurnitureName : 1, Price : 10, Quantity : 20 ,  operation:''},
                {Image:'',FurnitureName : 1, Price : 10, Quantity : 20 ,  operation:''},
                {Image:'',FurnitureName : 1, Price : 10, Quantity : 20 ,  operation:''},
                {Image:'',FurnitureName : 1, Price : 10, Quantity : 20 ,  operation:''}
            ]
        }
    }
    renderTableData(){
    return this.state.orders.map((orders, index) => {
        const {FurnitureName,Price,Quantity} = orders;
        return (
            <tr key= {FurnitureName}>
                <td><img></img></td>
                <td>{FurnitureName}</td>
                <td>{Price}</td>
                <td>{Quantity}</td>
                <center>
                <div class="flex-gap">
                    <button id ="delete" class="btn btn-danger">delete</button>
                    <button id ="edit" class="btn btn-primary">edit</button>
                    
                </div>
                </center>
               
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
                <div id="adminDashboard">
                <table id='adminDash'>
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

export default adminDashboard
