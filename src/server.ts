import app from './app';
import { PORT } from './config/dotenv';

app.listen(PORT, () => {
    console.log(`Guten-Crust running at http://localhost:${PORT}`);
});



// import express, { Express } from "express";
// import cors from "cors";
// import helmet from "helmet";
// import compression from "compression";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import { logger } from "./config/logger";
// import routes from "./routes/index";

// // Load environment variables
// dotenv.config();

// // Initialize Express app
// const app: Express = express();

// // Middlewares
// app.use(cors());
// app.use(helmet());
// app.use(compression());
// app.use(express.json());
// app.use(morgan("tiny"));

// // API Routes
// app.use("/api", routes);

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   logger.info(`✅ guten-crust API Gateway running on port ${PORT}`);
// });
