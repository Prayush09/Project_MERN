const mongoose=require('mongoose');
const taskSchema=mongoose.Schema({
    "project_name":String,
    "project_id":String,
    "user_id":String,
    "task_name":String,
    "task_status":String


})
const Project_Schema=mongoose.Schema({
    "first_name":String,
    "last_name":String,
    "email":String,
    "password":String,
    "tasks":[{type:taskSchema}]

},{
    collection:'Project'
})
// const myDb=mongoose.connection.useDb('Project');// This can be used to switch between databases
const Assignment= mongoose.model('Assignment', taskSchema); // Create a model for the task schema
const Project = mongoose.model('Project', Project_Schema);

module.exports = {
    Assignment,
    Project
};