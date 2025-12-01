import express from "express";
import { createShift, getShifts } from "../controllers/shift.controller.js";

const router = express.Router();

router.post("/", createShift);
router.get("/", getShifts);

export default router;
