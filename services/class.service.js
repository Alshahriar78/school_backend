import { ClassModel } from "../models/class.model.js";

export const ClassService = {
    async create(data) {
        if (!data.name) {
            throw new Error("class_name is required");
        }

        return await ClassModel.createClass(data.name,data.short_name);
    },

    async getAll() {
        return await ClassModel.getAllClasses();
    }
};
