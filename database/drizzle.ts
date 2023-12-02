import { drizzle } from "drizzle-orm/postgres-js";
import postgres from 'postgres';

// const migrationClient = postgres(process.env.DB_URL || "postgres://postgres:password@localhost:5432", { max: 1 });
// migrate(drizzle(migrationClient), { migrationsFolder: "./migrations" })

// for query purposes
const queryClient = postgres(process.env.DB_URL || "postgres://postgres:password@localhost:5432");
export const db = drizzle(queryClient);
