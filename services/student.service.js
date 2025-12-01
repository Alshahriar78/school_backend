import { StudentModel } from "../models/student.model.js";

export const StudentService = {
    async create(data) {
        if (!data.name) {
            throw new Error("student name is required");
        }

        return await StudentModel.createStudent(data);
    },

    async list() {
        return await StudentModel.getAllStudents();
    }
};
