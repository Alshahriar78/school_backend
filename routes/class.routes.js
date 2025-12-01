import express from "express";
import { createClass, getClasses } from "../controllers/class.controller.js";

const router = express.Router();

router.post("/", createClass);
router.get("/", getClasses);

export default router;
