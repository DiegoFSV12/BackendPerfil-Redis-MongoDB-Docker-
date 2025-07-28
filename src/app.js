import express from 'express'
import responseTime from 'response-time'
import AuthRoutes from './routes/auth-routes.js'

const app = express();

app.use(responseTime());
app.use(express.json());

app.use(AuthRoutes);

export default app;