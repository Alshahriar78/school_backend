// import { ShiftService } from "../services/shift.service.js";

// export const createShift = async (req, res) => {
//     try {
//         const result = await ShiftService.create(req.body);
//         res.status(201).json({
//             success: true,
//             message: "Shift created successfully",
//             data: result
//         });
//     } catch (err) {
//         res.status(500).json({ success: false, error: err.message });
//     }
// };

// export const getShifts = async (req, res) => {
//     try {
//         const result = await ShiftService.getAll();
//         res.status(200).json({
//             success: true,
//             data: result
//         });
//     } catch (err) {
//         res.status(500).json({ success: false, error: err.message });
//     }
// };
