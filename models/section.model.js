import { connectDB, sql } from "../database/db.connection.js";

export const SectionModel = {
    async createSection(name) {

        const db = await connectDB();
        const result = await db
            .request()
            .input("name", sql.NVarChar, name)
            .query(`
        INSERT INTO Section (name)
        OUTPUT INSERTED.section_id, INSERTED.name
        VALUES (@name)
      `);

        return result.recordset[0];
    },

    async getAllSections() {
        const db = await connectDB();

        const result = await db.request().query(`
      SELECT section_id, name
      FROM Section
      ORDER BY section_id DESC
    `);

        return result.recordset;
    }
};
