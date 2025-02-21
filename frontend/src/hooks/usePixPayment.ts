import { useState } from 'react';
import { createPixPayment } from '../services/pixPaymentService';

export const usePixPayment = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const submitPixPayment = async (
        amount: number,
        description: string,
        email: string
    ) => {
        setLoading(true);
        try {
            const data = await createPixPayment(amount, description, email);

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

    return {
        submitPixPayment,
        loading,
    };
};
