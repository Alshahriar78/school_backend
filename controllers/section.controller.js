const sectionService = require('../services/section.service');

exports.createSection = async (req, res) => {
    try {
        if(!req.body || req.body === null || req.body === undefined){
            return res.status(400).json({ message: 'Invalid class data' });
        }
        const sectionData = req.body; // Assuming class data is sent in the request body
        const newSection = await sectionService.insertClass(sectionData);
        res.status(201).json({
            message: 'Section  created successfully',
           data: newSection
        });
    } catch (error) {
        console.error("Create Section Error:", error);
         res.status(500).json({ message: "Error creating section", Error: error.message });
    }               
};