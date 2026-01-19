const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const UserModel = require('../models/user.model');

exports.insertUser = async (data) =>{
    const {email,password,role} = data;

    if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }
    const hashedPassword = await bcryptjs.hash(password,10);
    const user ={
        email:email,
        password:hashedPassword,
        role: role || "TEACHER"
    }
    return await UserModel.create(user);
}


exports.fetchUsers = async ()=>{
    return await UserModel.aggregate([
        {
            $project: {
                 __v:0,
                 password:0,
                _id: 0,
            }
        }
    ]);
};


exports.fetchUserById = async (id) =>{
    return await UserModel.aggregate([
  { $sort: { _id: 1 } },
  { $match: { _id: new mongoose.Types.ObjectId(id) } }
]);
}