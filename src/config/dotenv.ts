import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 8000;
export const GUTEN_DATALAKE_URL = process.env.GUTEN_DATALAKE_URL || 'http://localhost:8005';
