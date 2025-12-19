// import { GroupService } from "../services/group.service.js";

// export const createGroup = async (req, res) => {
//     try {
//         const result = await GroupService.create(req.body);
//         res.status(201).json({
//             success: true,
//             message: "Group created successfully",
//             data: result
//         });
//     } catch (err) {
//         res.status(500).json({ success: false, error: err.message });
//     }
// };

// export const getGroups = async (req, res) => {
//     try {
//         const result = await GroupService.getAll();
//         res.status(200).json({
//             success: true,
//             data: result
//         });
//     } catch (err) {
//         res.status(500).json({ success: false, error: err.message });
//     }
// };
