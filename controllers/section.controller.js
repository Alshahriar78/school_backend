// import { SectionService } from "../services/section.service.js";

// export const createSection = async (req, res) => {
//     try {
//         const result = await SectionService.create(req.body);
//         res.status(201).json({
//             success: true,
//             message: "Section created successfully",
//             data: result
//         });
//     } catch (err) {
//         res.status(500).json({ success: false, error: err.message });
//     }
// };

// export const getSections = async (req, res) => {
//     try {
//         const result = await SectionService.getAll();
//         res.status(200).json({ success: true, data: result });
//     } catch (err) {
//         res.status(500).json({ success: false, error: err.message });
//     }
// };
