const sectionSchema = new mongoose.Schema(
  {
    name: {
      type: String, // A, B, C
      required: true,
      uppercase: true,
    },

    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },

    totalStudents: {
      type: Number,
      default: 0,
    },

    shift: {
      type: String,
      enum: ["Morning", "Day"],
      default: "Morning",
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);
