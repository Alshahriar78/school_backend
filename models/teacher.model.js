const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    teacherId: {
      type: String,
      unique: true,
      sparse: true, // optional unique field
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
    },
    designation: {
      type: String,
    },
    department: {
      type: String,
    },
    subjects: [
      {
        type: String,
      },
    ],
    joiningDate: {
      type: Date,
    },
    salary: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);
