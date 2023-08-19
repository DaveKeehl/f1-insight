import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default {
  schema: "./src/db/*",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DB_HOST ?? "",
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER ?? "",
    database: process.env.DB_DATABASE ?? ""
  }
} satisfies Config;
