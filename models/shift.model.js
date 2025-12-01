import { connectDB, sql } from "../database/db.connection.js";

export const ShiftModel = {
    async createShift(name) {
        const db = await connectDB();

        const result = await db
            .request()
            .input("name", sql.NVarChar, name)
            .query(`
        INSERT INTO Shift (name)
        OUTPUT INSERTED.shift_id, INSERTED.name
        VALUES (@name)
      `);

        return result.recordset[0];
    },

    async getAllShifts() {
        const db = await connectDB();

        const result = await db.request().query(`
      SELECT shift_id, name 
      FROM Shift
      ORDER BY shift_id DESC
    `);

        return result.recordset;
    }
};
