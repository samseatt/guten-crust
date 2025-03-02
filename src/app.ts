import express from 'express';
import cors from 'cors';
import { logger } from './config/logger';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.use('/api', routes);

app.use(errorHandler);

export default app;
