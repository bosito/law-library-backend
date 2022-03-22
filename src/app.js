import express from 'express';
import morgan from 'morgan';

import userRoutes from './routes/users.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use(userRoutes);

export default app;