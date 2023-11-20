const express=require('express');
const mongoose=require('mongoose');
const Project_Schema=require('../Schema/Project_Description');
const {Project:User,Assignment:Task_Schema}=require('../Schema/User');
const Route=express.Router();
Route.post('/add-project/:id',(req,res)=>{
    console.log(req.body);
    Project_Schema.find({id:req.body.id,Project_Name:req.body.Project_Name},(err,data)=>{
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
Route.get('/delete-project/:id/:name',(req,res)=>{
    console.log(req.params.id);
    Project_Schema.deleteOne({id:req.params.id,Project_Name:req.params.name},(err,data)=>{
        if(err){
            console.log("Error in deleting the project");
        }else{
            // console.log(data);
            res.status(245).json({message:"Project Deleted Successfully"});
        }
    })
})
Route.post('/add-member',(req,res)=>{
    console.log(req.body);
    Project_Schema.updateOne({id:req.body.id,Project_Name:req.body.name},{$addToSet:{Members_Gmail:req.body.email}},(err,data)=>{
        if(err){
            console.log(err);
        }else{
            if(data.modifiedCount===0){
                res.status(244);
            }else{
                res.status(245);
            }
        }
    })
})
Route.get('/get-memeber/:id/:name',(req,res)=>{
    Project_Schema.find({id:req.params.id,Project_Name:req.params.name},(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.status(200).json(data[0].Members_Gmail);
        }
    })
})

Route.get('/delete-member/:id/:name/:value',(req,res)=>{
    Project_Schema.updateOne({id:req.params.id,Project_Name:req.params.name},{$pull:{Members_Gmail:req.params.value}},(err,data)=>{
        if(err){
            console.log(err); 
        }
        else{
            console.log(data);
            res.status(200);
        }
    })

})





Route.post('/add-task',(req,res)=>{
    console.log(req.body);
    Project_Schema.find({id:req.body.id,Project_Name:req.body.name},(err,data)=>{
       
        if(err){
            console.log(err);
        }else{
            let project_id=data[0]._id;
            console.log(project_id);
            console.log(data);
            const add_task={"project_id":project_id,"user_id":req.body.id,"task_name":req.body.task,"task_status":"Not Started"};
            console.log(add_task);
            User.updateOne({email:req.body.email},{$addToSet:{tasks:add_task}},(err,data_use)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Task Added Successfully");
                    console.log(data_use);
                }
            })
            Task_Schema.create(add_task,(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            })
            
        }
    })

})
module.exports=Route;