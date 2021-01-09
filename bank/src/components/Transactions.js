import React, { Component } from 'react';

const axios = require('axios')

class Transactions extends Component {

    constructor() {
        super()
        this.state = {
            transactions: []
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

    deleteTransaction = async (id) => {
        await axios.delete('http://localhost:8080/transaction', { data: { id } })
        await this.getTransactionsFromServer()
    }

    createTransaction = (v) => {
        return (
            <div key={v._id} className={(v.amount > 0 ? 'deposite' : 'withDrow') + " transaction"}>
                <div className={" amount"}>{v.amount}</div>
                <div className="vendor">{v.vendor}</div>
                <div className="category">{v.category}</div>
                <div className="btn" onClick={() => this.deleteTransaction(v._id)}><i className="fas fa-eraser"></i></div>
            </div>
        )
    }

    render() {
        
        return (
            <div id="transactionTable">
                <div className="transaction">
                    <div className="amount">$$$</div>
                    <div className="vendor">Vendor</div>
                    <div className="category">Category</div>
                    <div className="category"></div>
                </div>
                {this.state.transactions.map(v => this.createTransaction(v))}
            </div>
        )
    }
}

export default Transactions;