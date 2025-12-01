import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index.routes.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// Health
app.get("/health", (req, res) => res.json({ status: "ok", time: new Date() }));

// API v1
app.use("/api/v1", routes);

// Global error handler
app.use(errorHandler);

export default app;
