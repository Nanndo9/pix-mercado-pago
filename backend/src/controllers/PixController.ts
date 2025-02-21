import { PixMercadoPagoService } from '../services/mercadoPago/pixMercadoPagoService';
import { Request, Response } from 'express';

export class PixController {
    private static pixService = new PixMercadoPagoService();

    static async createPayment(req: Request, res: Response) {
        const { amount, description, email } = req.body;
        try {
            const payment = await PixController.pixService.createPayment(
                amount,
                description,
                email
            );
            console.log(payment);
            return res.status(201).json(payment);
        } catch (error) {
            console.error('Erro no createPayment:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}
