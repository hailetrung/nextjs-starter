import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";
dotenv.config();

export default {
    schema: "./database/schema/*",
    out: "./database/migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || "postgres://postgres:password@localhost:5432",
    }
} satisfies Config;