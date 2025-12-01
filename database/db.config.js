import dotenv from "dotenv";
dotenv.config();

export const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER ?? "localhost",
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT ?? "1433"),
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};