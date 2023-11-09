const express=require('express');
const Route=express.Router();
const Project_Schema=require('../Schema/Schema');
let arr=[];

Route.post("/create/:email",(req,res)=>{
    Project_Schema.find({email:req.params.email},(err,data)=>{
        if(err){
            console.log('%cError in getting the data', 'color: green; background: yellow; font-size: 30px');
            return err;
        }else{
            if(data.length!==0){
                res.status(244).json({message:"Email is already registered"})
        }else{
            Project_Schema.create(req.body,(err,data)=>{
                if(err){
                    console.log('%cError in getting the data', 'color: green; background: yellow; font-size: 30px');
                    return err;
                }else{
                    res.status(200).json(data);
                }
            })
        }
    }
    })
})
Route.get("/get",(req,res)=>{
    Project_Schema.find((err,data)=>{
        if(err){
            console.log('%cError in getting the data', 'color: green; background: yellow; font-size: 30px');
            return err;
        }else{
            res.json(data)
        }
    })
})
Route.get("/isValidate/:email",(req,res)=>{
    Project_Schema.find({email:req.params.email},(err,data)=>{
        if(err){
            console.log('%cError in getting the data', 'color: green; background: yellow; font-size: 30px');
            return err;
        }else{
            res.json(data)
        }
    })

})
module.exports = Route;