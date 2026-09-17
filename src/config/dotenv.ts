import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 8000;
export const GUTEN_DATALAKE_URL = process.env.GUTEN_DATALAKE_URL || 'http://localhost:8005';

export const CORS_ORIGINS = (process.env.CORS_ORIGINS || "http://localhost:3000,http://localhost:3001").split(",").map(value => value.trim()).filter(Boolean);
