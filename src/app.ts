import express from 'express';
import pixRouter from './routes/pixRoutes';

const app = express();

app.use(express.json());


app.use('/pix', pixRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
