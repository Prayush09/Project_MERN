const mongoose=require('mongoose');
const task_Schema=mongoose.Schema({
    'id':mongoose.Schema.Types.ObjectId,
    'project_name':[{type:String}]

},{
    collection:'Task'
})
// const myDb=mongoose.connection.useDb('Task');// This can be used to switch between databases
module.exports=mongoose.model('Task',task_Schema);