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

exports.getUser = async (req,res) =>{
    try {
            const classes = await userServices.fetchUsers(); // Fetch all classes
            res.status(200).json({
                message: 'Classes retrieved successfully',
                data: classes
            });
        } catch (error) {
            console.error("Get Classes Error:", error);
            res.status(500).json({ message: "Error retrieving classes", Error: error.message });
        } 
}


exports.getUserById = async (req,res) =>{
    try {
        const userId = req.params.id;
        const user = await userServices.fetchUserById(userId);
        res.status(200).json({
            message: 'Class retrieved successfully',
            data: user
        });
    } catch (error) {
        console.error("Get Classes Error:", error);
        res.status(500).json({ message: "Error retrieving classes", Error: error.message });
    }
}