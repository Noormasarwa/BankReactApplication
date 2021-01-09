import React, { Component } from 'react';
import Category from './Category'
const axios = require('axios')

class Categories extends Component {

    constructor(){
        super()
        this.state = {
            transactions:[]
        }
    }

    getTransactionsFromServer = async () => {
        const transaction = await axios.get("http://localhost:8080/transactions")
        this.setState({
            transactions: transaction.data
        })
    }

    async componentDidMount() {
        await this.getTransactionsFromServer()
    }

    redusceForCategories = () => {
        const results = this.state.transactions.reduce(function (r,  a) {
            r[a.category] = r[a.category] || [];
            r[a.category].push(a);
            return r;
        }, Object.create(null));
        const keys = Object.keys(results)
        const newResults = []
        for (let i of keys) {
            let sum = 0
            for (let v of results[i])
                sum += v.amount 
            newResults.push({ category: i, sum, type: (sum > 0 ? "deposite" : "withDrow") })
        }
        return newResults
    }

    render() {
        const newResults = this.redusceForCategories()
        return (
            <div id="transactionTable">
                <div className="transaction">
                    <div className="category">Category</div>
                    <div></div>
                    <div></div>
                    <div className="amount">Total</div>
                </div>
                {newResults.map(v => <Category key = {v.category} val = {v}/>)}
            </div>
        )
    }
}

export default Categories