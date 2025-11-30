import { pool } from "../config/config.js";

export async function createUser({ name, email, password }) {
    const { rows } = await pool.query(
        `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING id, name, email, created_at
        `,
        [name, email, password]
    );
    return rows[0];
}

export async function findUserByEmail(email) {
    const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
    ]);
    return rows[0];
}
