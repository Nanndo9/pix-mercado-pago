import { useState } from 'react';
import { createPixPayment } from '../services/pixPaymentService';

export const usePixPayment = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const submitPixPayment = async (
        amount: string,
        description: string,
        email: string
    ): Promise<void> => {
        setLoading(true);

        try {
            const amountNumber = parseFloat(amount.replace(',', '.'));
            const data = await createPixPayment(
                amountNumber,
                description,
                email
            );

            if (data.point_of_interaction?.transaction_data?.ticket_url) {
                window.location.href =
                    data.point_of_interaction.transaction_data.ticket_url;
            }
        } catch (error) {
            console.error('Erro ao processar pagamento:', error);
        } finally {
            setLoading(false);
        }
    };

    return { submitPixPayment, loading };
};
