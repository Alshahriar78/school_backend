import { connectDB, sql } from "../database/db.connection.js";

export const ClassModel = {
    async createClass(name,short_name) {
        console.log(short_name);
        const db = await connectDB();

        const result = await db
            .request()
            .input("name", name)
            .input("short_name", short_name)
            .query(`
                INSERT INTO Class (name, short_name) VALUES (@name, @short_name)
      `);

        return result;
    },

    async getAllClasses() {
        const db = await connectDB();
        const result = await db.request().query(`
      SELECT class_id, name, short_name FROM Class ORDER BY class_id DESC
    `);
        return result.recordset;
    }
};
