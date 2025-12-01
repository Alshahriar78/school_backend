import { GroupModel } from "../models/group.model.js";

export const GroupService = {
    async create(data) {
        if (!data.name) {
            throw new Error("group_name is required");
        }

        return await GroupModel.createGroup(data.name);
    },

    async getAll() {
        return await GroupModel.getAllGroups();
    }
};
