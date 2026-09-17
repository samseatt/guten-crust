import express from 'express';
import axios from 'axios';
import { GUTEN_DATALAKE_URL, CORS_ORIGINS } from './config/dotenv';
import cors from 'cors';
import { logger } from './config/logger';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(cors({ origin: CORS_ORIGINS }));
app.use(logger);

app.get('/health/live', (_req, res) => { res.json({ status: 'alive' }); });
app.get('/health/ready', async (_req, res) => {
    try {
        await axios.get(`${GUTEN_DATALAKE_URL}/health/ready`, { timeout: 3500 });
        res.json({ status: 'ready' });
    } catch { res.status(503).json({ status: 'not ready' }); }
});

app.use('/api', routes);

app.use(errorHandler);

export default app;
