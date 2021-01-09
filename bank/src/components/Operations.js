import React, { Component } from 'react';
const axios = require('axios')

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: '',
            category: ''
        }
    }

    updateFields = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    makeTransaction =  (e) => {
        if (!this.state.amount || !this.state.vendor || !this.state.category) {
            return
        }
        axios.post('http://localhost:8080/transaction', {
            amount: e.target.name === 'deposite' ? this.state.amount : this.state.amount *-1 ,
            vendor: this.state.vendor,
            category: this.state.category
        }).then(() => {
                this.setState({
                amount: 0,
                vendor: "",
                category: ""
            })
            }).catch(function (err) {
                    console.log(err);
            });
    }

    render() {
        return (
            <div id="container">
                <input type="Number"  placeholder="Amount" name="amount" value={this.state.amount} onChange={this.updateFields} />
                <input type="text" placeholder="Vendor" name="vendor" value={this.state.vendor} onChange={this.updateFields} />
                <input type="text" placeholder="Category" name="category" value={this.state.category} onChange={this.updateFields} />
                <div id="buttons">
                    <button name="deposite" onClick={this.makeTransaction}>Deposite</button>
                    <button name="withDrow" onClick={this.makeTransaction}>WithDrow</button>
                </div>
            </div>
        )
    }
}

export default Operations;