const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    id:String,
    Project_Name:String,
    Members_Gmail:[{String}]


},{
    collection: 'Project_Description'
})
module.exports = mongoose.model('Project_Description', Schema)