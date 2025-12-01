import { connectDB, sql } from "../database/db.connection.js";

export const StudentModel = {
    async createStudent(data) {
        const db = await connectDB();

        const request = db.request();

        // Object.keys(data).forEach((key) => {
        //     request.input(key, data[key]);
        // });

        const result = await request

            // REQUIRED FIELDS
            .input("name", sql.NVarChar(200), data.name)
            .input("sms_status", sql.Bit, data.sms_status ?? 1)
            .input("status", sql.NVarChar(30), data.status ?? "active")
            .input("registration_date", sql.DateTime2, new Date())
            .input("created_at", sql.DateTime2, new Date())

            // OPTIONAL NUMERIC FIELDS
            .input("roll", sql.Int, data.roll || null)
            .input("class_id", sql.Int, data.class_id || null)
            .input("section_id", sql.Int, data.section_id || null)
            .input("shift_id", sql.Int, data.shift_id || null)
            .input("group_id", sql.Int, data.group_id || null)

            // OPTIONAL TEXT FIELDS
            .input("birth_certificate", sql.NVarChar(100), data.birth_certificate || null)
            .input("father_name", sql.NVarChar(200), data.father_name || null)
            .input("father_nid", sql.NVarChar(50), data.father_nid || null)
            .input("father_mobile", sql.NVarChar(30), data.father_mobile || null)
            .input("mother_name", sql.NVarChar(200), data.mother_name || null)
            .input("mother_nid", sql.NVarChar(50), data.mother_nid || null)
            .input("mother_mobile", sql.NVarChar(30), data.mother_mobile || null)
            .input("present_address", sql.NVarChar(500), data.present_address || null)
            .input("permanent_address", sql.NVarChar(500), data.permanent_address || null)

            .input("dob", sql.Date, data.dob || null)
            .input("gender", sql.Char(1), data.gender || null)
            .input("blood_group", sql.NVarChar(10), data.blood_group || null)
            .input("religion", sql.NVarChar(50), data.religion || null)
            .input("session", sql.NVarChar(50), data.session || null)

            // OPTIONAL CATEGORY
            .input("category", sql.NVarChar(20), data.category || null)
            .query(`
      INSERT INTO Student (
        name, roll, class_id, section_id, shift_id, group_id,
        session, gender, religion, blood_group, dob,
        birth_certificate, father_name, father_nid, father_mobile,
        mother_name, mother_nid, mother_mobile,
        present_address, permanent_address,
        category, sms_status
      )
      OUTPUT INSERTED.*
      VALUES (
        @name, @roll, @class_id, @section_id, @shift_id, @group_id,
        @session, @gender, @religion, @blood_group, @dob,
        @birth_certificate, @father_name, @father_nid, @father_mobile,
        @mother_name, @mother_nid, @mother_mobile,
        @present_address, @permanent_address,
        @category, @sms_status
      );
    `);

        return result.recordset[0];
    },

    async getAllStudents() {
        const db = await connectDB();

        const result = await db.request().query(`
            SELECT
                s.student_id as id,
                s.name as name,
                s.roll as roll,
                c.name as className,
                sec.name as section,
                s.father_mobile as guardianPhone
            FROM Student s
                LEFT JOIN Class c ON s.class_id = c.class_id
                LEFT JOIN Section sec ON s.section_id = sec.section_id
                LEFT JOIN Shift sh ON s.shift_id = sh.shift_id
                LEFT JOIN [Group] g ON s.group_id = g.group_id
            ORDER BY s.student_id DESC;
    `);

        return result.recordset;
    }
};
