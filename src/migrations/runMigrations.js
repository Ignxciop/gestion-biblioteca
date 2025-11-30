import fs from "fs";
import path from "path";
import { pool } from "../config/config.js";

const migrationsDir = path.resolve("src/migrations");

async function runMigrations() {
    const files = fs
        .readdirSync(migrationsDir)
        .filter((f) => f.endsWith(".sql"));

    try {
        for (const file of files) {
            const filePath = path.join(migrationsDir, file);
            const sql = fs.readFileSync(filePath, "utf-8");

            console.log("Running migration »", file);
            await pool.query(sql);
        }

        console.log("Migrations executed successfully");
        process.exit(0);
    } catch (err) {
        console.error("Error running migrations »", err);
        process.exit(1);
    }
}

runMigrations();
