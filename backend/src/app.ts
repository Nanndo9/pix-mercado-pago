import express from 'express';
import pixRouter from './routes/pixRoutes';
import cors from 'cors';
import router from './routes/webHookRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1/webhook', router);
app.use('/pix', pixRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
