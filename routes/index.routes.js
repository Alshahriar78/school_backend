import { Router } from "express";
import classRoutes from "./class.routes.js";
import sectionRoutes from "./section.routes.js";
import shiftRoutes from "./shift.routes.js";
import groupRoutes from "./group.routes.js";
import studentRoutes from "./student.routes.js";

const router = Router();

router.use("/class",classRoutes);
router.use("/section",sectionRoutes);
router.use("/shift",shiftRoutes);
router.use("/group",groupRoutes);
router.use("/student", studentRoutes);

// TODO: add /teachers, /attendance, /exams routes here

export default router;
