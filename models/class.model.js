const mongoose = require('mongoose');


const classSchema = new mongoose.Schema({
    className: {type: String,required: true,unique:true}, 
    status: {type: String,enum: ["Active", "Inactive"],default: "Active",},
},{timestamps:true});

const ClassModel = mongoose.model('Class', classSchema);

module.exports =  ClassModel ;