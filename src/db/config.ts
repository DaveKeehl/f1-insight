import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

export const config: mysql.ConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE
};

export const connection = mysql.createPool(config);
export const db = drizzle(connection);
