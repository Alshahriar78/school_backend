import { StudentService } from "../services/student.service.js";

export const createStudent = async (req, res) => {
    try {
        const result = await StudentService.create(req.body);

        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: result
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

export const getAllStudents = async (req, res) => {
    try {
        const students = await StudentService.list();
        res.status(200).json({
            success: true,
            data: students
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

export const updateStudent = async (id, data) => {
  let pool = await sql.connect(dbConfig);

  const result = await pool.request()
    .input("student_id", sql.Int, id)
    .input("name", sql.NVarChar, data.name ?? null)
    .input("roll", sql.Int, data.roll ?? null)
    .input("class_id", sql.Int, data.class_id ?? null)
    .input("section_id", sql.Int, data.section_id ?? null)
    .input("shift_id", sql.Int, data.shift_id ?? null)
    .input("group_id", sql.Int, data.group_id ?? null)
    .input("session", sql.NVarChar, data.session ?? null)
    .input("father_name", sql.NVarChar, data.father_name ?? null)
    .query(`
      UPDATE Student
      SET
        name = COALESCE(@name, name),
        roll = COALESCE(@roll, roll),
        class_id = COALESCE(@class_id, class_id),
        section_id = COALESCE(@section_id, section_id),
        shift_id = COALESCE(@shift_id, shift_id),
        group_id = COALESCE(@group_id, group_id),
        session = COALESCE(@session, session),
        father_name = COALESCE(@father_name, father_name)
      WHERE student_id = @student_id
    `);

  return result.rowsAffected[0];
};

export const deleteStudent = async (id) => {
  let pool = await sql.connect(dbConfig);

  const result = await pool.request()
    .input("student_id", sql.Int, id)
    .query(`DELETE FROM Student WHERE student_id = @student_id`);

  return result.rowsAffected[0];
};

