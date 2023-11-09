const express = require('express');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Project')
let db=mongoose.connection;
db.on('error',()=>console.log("Error in connecting to database"));
db.on('open',()=>console.log("Connected to database"));
const Route =require('./Route/route');
const bodyParser = require('body-parser');
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/api',Route);


app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})