const express=require('express');
const mongoose=require('mongoose');
const Project_Schema=require('../Schema/Project_Description');
const Route=express.Router();
Route.post('/add-project/:id',(req,res)=>{
    Project_Schema.find({Project_Name:req.body.Project_Name},(err,data)=>{
        if(err){
            console.log(err);
            console.log("ERROR HAS OCCURED")
        }else{
            console.log(data);
            if(data.length===0){// if the project does not exsist error will be thrown
                Project_Schema.create(req.body,(err,data)=>{
                    if(err){
                        console.log("Error in getting the data");
                    }else{
                        res.status(200);
                    }
                })
            }else{
                res.status(200);
            }
        }
    })

})
Route.get('/delete-project/:name',(req,res)=>{
    Project_Schema.deleteOne({Project_Name:req.params.name},(err,data)=>{
        if(err){
            console.log("Error in deleting the project");
        }else{
            console.log(data);
            res.status(245).json({message:"Project Deleted Successfully"});
        }
    })
})
module.exports=Route;