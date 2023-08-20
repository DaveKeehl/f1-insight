import mysql from "mysql2/promise";

export const config: mysql.ConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE
};
