import type { Config } from "drizzle-kit";

const env = process.env["DATABASE_URL"] || "NULL";
if (env == "NULL") {
  throw new Error("DATABASE_URL is not set");
}

export default {
  //   schema: "./schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env,
  },
} satisfies Config;
