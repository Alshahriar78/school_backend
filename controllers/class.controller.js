const classService = require('../services/class.service.js')

exports.createClass = async (req, res) => {
    try {
        if(!req.body || req.body === null || req.body === undefined){
            return res.status(400).json({ message: 'Invalid class data' });
        }
        const classData = req.body; // Assuming class data is sent in the request body
        const newClass = await classService.insertClass(classData);
        res.status(201).json({
            message: 'Class created successfully',
           data: newClass
        });
    } catch (error) {
        console.error("Create Class Error:", error);
         res.status(500).json({ message: "Error creating class", Error: error.message });
    }               
};
exports.getClass = async (req, res) => {
    try {
        const classes = await classService.fetchClasses(); // Fetch all classes
        res.status(200).json({
            message: 'Classes retrieved successfully',
            data: classes
        });
    } catch (error) {
        console.error("Get Classes Error:", error);
        res.status(500).json({ message: "Error retrieving classes", Error: error.message });
    }   
};