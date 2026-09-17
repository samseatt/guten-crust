import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (axios.isAxiosError(err)) {
        const status = err.response?.status ?? (err.code === 'ECONNABORTED' ? 504 : 502);
        const detail = err.response?.data?.detail;
        const message = typeof detail === 'string' ? detail
            : status === 422 ? 'Invalid request. Check the supplied values.' : 'The data service could not complete the request.';
        res.status(status).json({ error: { message }, ...(detail ? { detail } : {}) });
        return;
    }
    res.status(500).json({ error: { message: 'Internal Server Error' } });
};
