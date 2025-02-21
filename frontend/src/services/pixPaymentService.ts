import axios from 'axios';

export interface PixResponse {
    point_of_interaction: {
        transaction_data: {
            ticket_url: string;
        };
    };
}

export const createPixPayment = async (
    amount: number,
    description: string,
    email: string
): Promise<PixResponse> => {
    const response = await axios.post<PixResponse>(
        'http://localhost:3000/pix/create',
        {
            amount,
            description,
            email,
        }
    );
    return response.data;
};
