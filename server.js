import app from "./app.js";
import { connectDB } from "./database/db.connection.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(); // ensure DB connection before listening
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err.message ?? err);
        process.exit(1);
    }
};

start();
