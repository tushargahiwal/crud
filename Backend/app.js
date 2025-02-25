const express=require("express");
const app=express();

const cors=require('cors');
const moongoose = require("mongoose");
app.use(cors());
const route=require('./route');

moongoose.connect("mongodb://localhost:27017/dashboard")
app.use(express.json());
app.use('/',route);

port=8000;

app.listen(port,()=>{
    console.log(`port is running on ${port}`);
})
