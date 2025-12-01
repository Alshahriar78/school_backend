import sql from "mssql";
import { dbConfig } from "./db.config.js";

let pool = null;

export const connectDB = async () => {
    if (pool) return pool;
    try {
        pool = await sql.connect(dbConfig);
        console.log("MSSQL Connected");
        return pool;
    } catch (err) {
        console.error("MSSQL Connection error:", err.message ?? err);
        throw err;
    }
};

export { sql };
