const mongoose = require('mongoose');
const  ClassModel =require('../models/class.model.js') ;

exports.insertClass = async (data) => {
    return await ClassModel.create(data);
};

exports.fetchClasses = async () => {
    return await ClassModel.aggregate([
        {
            $project: {
                className:1,
                _id: 0,
            }
        }
    ]);
};  

exports.fetchClassById = async (id) =>{
    return await ClassModel.aggregate([
  { $sort: { _id: 1 } },
  { $match: { _id: mongoose.Types.ObjectId(id) } }
]);
}