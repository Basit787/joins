import "dotenv/config";
import postgres from "postgres";
import ENV from "../lib/env.js";
import { drizzle } from "drizzle-orm/postgres-js";

const connectionString = postgres(ENV.DB_URL);

export const db = drizzle(connectionString);
