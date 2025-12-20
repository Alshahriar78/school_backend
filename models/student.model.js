const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    // Identity
    fullName: { type: String, required: true, trim: true },
    studentCode: { type: String, unique: true, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dateOfBirth: Date,
    bloodGroup: { type: String, enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"] },
    photo: String,

    // Contact
    phone: String,
    email: { type: String, lowercase: true, sparse: true },
    address: String,
    guardianName: String,
    guardianPhone: String,

    // Academic
    classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
    sectionId: { type: mongoose.Schema.Types.ObjectId, ref: "Section", required: true },
    admissionDate: { type: Date, default: Date.now },
    rollNumber: Number,

    
    status: { type: String, enum: ["Active", "Inactive", "Graduated"], default: "Active" },
    

    house: String,
    medicalInfo: String,
    guardianOccupation: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
