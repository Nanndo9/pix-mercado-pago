import express from 'express';
import pixRouter from './routes/pixRoutes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/pix', pixRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
