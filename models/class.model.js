const mongoose = require('mongoose');


const classSchema = new mongoose.Schema({
    name: {
        type: String,required: true},
    section:{ 
        type: String,
        enum: ["A","B","C","D"],
        required: true
    },
    classId:{type:Number,required:true,unique:true}
},{timestamps:true});

const ClassModel = mongoose.model('Class', classSchema);

module.exports =  ClassModel ;
