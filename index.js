const express = require('express');
const app = express();
const body = require('body-parser');
const con = require('./db')
const route =require('./router/router')

app.use(body.json());

app.use('/all',route)
app.use('/',(req,res)=>{
    res.status(200).send("Welcome")
})


app.listen(3001,()=>{
    console.log('Express server is running at3001');
})
