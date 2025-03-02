import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

// Create a write stream for logging
const logStream = fs.createWriteStream(path.join(__dirname, '../../access.log'), { flags: 'a' });

export const logger = morgan('combined', { stream: logStream });




// import winston from "winston";

// export const logger = winston.createLogger({
//   level: "info",
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: "logs/error.log", level: "error" }),
//   ],
// });
