import { pool } from "../config/config.js";

async function testConnection() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Connect to DB »", result.rows[0]);
    } catch (error) {
        console.error("Error to connect to DB »", error);
    }
}

testConnection();
