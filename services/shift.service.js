import { ShiftModel } from "../models/shift.model.js";

export const ShiftService = {
    async create(data) {
        if (!data.name) {
            throw new Error("shift_name is required");
        }

        return await ShiftModel.createShift(data.name);
    },

    async getAll() {
        return await ShiftModel.getAllShifts();
    }
};
