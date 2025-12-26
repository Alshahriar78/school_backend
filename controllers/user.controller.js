const userServices = require('../services/user.service');

exports.createUser = async (req,res) =>{
      try {
            if(!req.body || req.body === null || req.body === undefined){
                return res.status(400).json({ message: 'Invalid User data' });
            }
            const userData = req.body; // Assuming class data is sent in the request body
            const newUser = await userServices.insertUser(userData);
            res.status(201).json({
                message: 'User created successfully',
               data: newUser
            });
        } catch (error) {
            console.error("Create User Error:", error);
             res.status(500).json({ message: "Error creating User", Error: error.message });
        }     
}