import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: ".env.development.local" });
const client = postgres(process.env.POSTGRES_URL_NON_POOLING ?? "", { prepare: false });
export const db = drizzle({ client });
