import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.development.local" });

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL_NON_POOLING ?? "",
  },
});
