const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction.js')

router.get('/' , (req, res) => {
    res.send({status: "server working"})
})

router.get('/transactions' , (req, res) => {
    Transaction.find({}, function(data, err){
        if(err)
            res.send(err)
        else 
            res.send(data)
    })
})

router.post('/transaction' , (req, res) =>{ 
    const transaction = new Transaction(req.body)
    transaction.save()
    res.end()
})

router.delete('/transaction' , (req, res) =>{ 
    Transaction.findByIdAndRemove(req.body.id ,function(err){
        if(err)
            res.send(err)
        else
            res.end()
    })
})

module.exports = router