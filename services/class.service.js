const  ClassModel =require('../models/class.model.js') ;

exports.insertClass = async (data) => {
    return await ClassModel.create(data);
};

exports.fetchClasses = async () => {
    return await ClassModel.aggregate([
        {
            $project: {
                __v: 0
            }
        }
    ]);
};  