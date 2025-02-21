import { MercadoPagoConfig, Payment } from 'mercadopago';
import 'dotenv/config';

export class PixMercadoPagoService {
    private client: MercadoPagoConfig;
    private payment: Payment;

    constructor() {
        this.client = new MercadoPagoConfig({
            accessToken: process.env.MP_ACCESS_TOKEN || '',
            options: { timeout: 5000 },
        });
        this.payment = new Payment(this.client);
    }

    async createPayment(amount: number, description: string, email: string) {
        try {
            const paymentBody = {
                transaction_amount: amount,
                description: description,
                payment_method_id: 'pix',
                payer: {
                    email: email,
                },
                notification_url: process.env.MP_NOTIFICATION_URL || '',
            };

            const result = await this.payment.create({ body: paymentBody });
            return result;
        } catch (error) {
            console.error('Erro ao criar pagamento:', error);
            throw error;
        }
    }
}
