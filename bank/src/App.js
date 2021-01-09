import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Operations from './components/Operations'
import Categories from './components/Categories'
import Transactions from './components/Transactions'



class App extends Component {

  render() {
    return (
      <Router>
        <div id="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/operations">Operations</a></li>
            <li><a href="/transactions">Transactions</a></li>
            <li><a href="/categories">Categories</a></li>
            <li className="right">Balance Bank</li>
          </ul>
        </div>
        <Route exact path ='/'>
          <div id="home">
            Balance Bank , Secure and  Store Your Transactions.
          </div>
        </Route >
        <Route exact path ='/operations' component ={Operations}/>
        <Route exact path ='/categories' component ={Categories}/>
        <Route exact path ='/transactions' component ={Transactions}/>
      </Router>
    )
  }
}

export default App;
