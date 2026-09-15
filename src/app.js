import express from 'express';
import eventsRouter from './routes/events.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor activo' });
});

app.use('/api/events', eventsRouter);

export default app;