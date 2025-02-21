import { Router } from 'express';
import { PixController } from '../controllers/PixController';

const pixRouter = Router();

pixRouter.post('/create', PixController.createPayment);

export default pixRouter;
