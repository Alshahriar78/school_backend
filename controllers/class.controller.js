import { ClassService } from "../services/class.service.js";

export const createClass = async (req, res) => {
    try {
        const result = await ClassService.create(req.body);
        res.status(201).json({
            success: true,
            message: "Class created successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

export const getClasses = async (req, res) => {
    try {
        const result = await ClassService.getAll();
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
