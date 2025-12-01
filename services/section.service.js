import { SectionModel } from "../models/section.model.js";

export const SectionService = {
    async create(data) {
        if (!data.name) {
            throw new Error("section_name is required");
        }

        return await SectionModel.createSection(data.name);
    },

    async getAll() {
        return await SectionModel.getAllSections();
    }
};
