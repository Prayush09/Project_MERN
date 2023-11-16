const express=require('express');
const Route=express.Router();
const Task_Schema=require('../Schema/Task');
const mongoose=require('mongoose');

Route.post('/create-project/:id',(req,res)=>{// This is used to create a new project
    
    Task_Schema.find({id:req.params.id},(err,data)=>{
        if(err){
            console.log("Error in getting the data");
        }else{
           if(data.length===0){
            Task_Schema.create(req.body,(err,data)=>{
                if(err){
                    console.log("Error in getting the data");
                }else{
                    res.status(200).json(data);
                }
            })
           }else{
             Task_Schema.updateOne({id:req.params.id},{$addToSet:{project_name:req.body.project_name}},(err,data)=>{
                 if(err){
                    console.log("Error in getting the data");
                 }else{
                     if(data.modifiedCount===0){
                        // If the user tries to create a project that is already created, then the user will be notified
                        res.status(244).json({message:"Project is already created"});
                        return;
                     }
                     res.status(200).json(data);
                 }
             })
           }
        }
    }
    )
})
Route.get('/get-project/:id',(req,res)=>{// This is used to get all the projects of a user
    Task_Schema.find({id:req.params.id},(err,data)=>{
        if(err){
            console.log("Error in getting the data");
        }else{
            res.status(200).json(data);
        }
    })
})

Route.post('/delete-project/:id',(req,res)=>{
    Task_Schema.updateOne({id:mongoose.Types.ObjectId(req.params.id)},{$pull:{project_name:req.body.project_name}},(err,data)=>{
        if(err){
            console.log(err);
            console.log("ERROR HAS OCCURED")
        }else{
            console.log(data);
            if(data.modifiedCount===1){// if the project does not exsist error will be thrown
                res.status(245);
            }else{
                res.status(246).json({"message":'Some error has occured'});
            }
        }
    })
})
module.exports = Route;