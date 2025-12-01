import { connectDB, sql } from "../database/db.connection.js";

export const GroupModel = {
    async createGroup(name) {
        const db = await connectDB();

        const result = await db
            .request()
            .input("name", sql.NVarChar, name)
            .query(`
        INSERT INTO [Group] (name)
        OUTPUT INSERTED.group_id, INSERTED.name
        VALUES (@name)
      `);

        return result.recordset[0];
    },

    async getAllGroups() {
        const db = await connectDB();

        const result = await db.request().query(`
      SELECT group_id, name 
      FROM [Group]
      ORDER BY group_id DESC
    `);

        return result.recordset;
    }
};
