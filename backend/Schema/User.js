const mongoose=require('mongoose');
const Project_Schema=mongoose.Schema({
    "first_name":String,
    "last_name":String,
    "email":String,
    "password":String
},{
    collection:'Project'
})
// const myDb=mongoose.connection.useDb('Project');// This can be used to switch between databases
module.exports=mongoose.model('Project',Project_Schema);