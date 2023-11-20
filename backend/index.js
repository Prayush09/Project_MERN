const express = require('express');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Project')
let db=mongoose.connection;
db.on('error',()=>console.log("Error in connecting to database"));
db.on('open',()=>console.log("Connected to database"));
const Route_User =require('./Route/User_Route');
const Route_Task=require('./Route/Task_Route');
const Route_Project=require('./Route/Project_Route');
const bodyParser = require('body-parser');
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/api',Route_User);//The user route is used to create a new user and to get all the users
app.use('/task',Route_Task);//The task route is used to create a new project and to get all the projects of a user
app.use('/project',Route_Project);//The project route is used to create a new task and to get all the tasks of a project
app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})