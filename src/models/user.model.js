import { pool } from "../config/config.js";

export async function createUser({ fullname, email, password, rol_id }) {
    const { rows } = await pool.query(
        `
        INSERT INTO users (fullname, email, password, rol_id)
        VALUES ($1, $2, $3, $4)
        RETURNING id, fullname, email, rol_id, created_at
        `,
        [fullname, email, password, rol_id]
    );
    return rows[0];
}

export async function findUserByEmail(email) {
    const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
    ]);
    return rows[0];
}
