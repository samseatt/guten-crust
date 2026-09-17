import app from './app';
import { PORT } from './config/dotenv';

const host = process.env.HOST || '127.0.0.1';
app.listen(Number(PORT), host, () => {
    console.log(`Guten-Crust running at http://${host}:${PORT}`);
});
