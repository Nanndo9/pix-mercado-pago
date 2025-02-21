import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { BlockUI } from 'primereact/blockui';
import { ProgressSpinner } from 'primereact/progressspinner';
import { CurrencyInput } from '../components/CurrencyInput';
import { usePixPayment } from '../hooks/usePixPayment';
import { InputText } from 'primereact/inputtext';

const PixPaymentForm: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const { submitPixPayment, loading } = usePixPayment();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitPixPayment(amount, description, email);
    };

    return (
        <BlockUI blocked={loading} template={<ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="4" />}>
            <div className="flex justify-content-center align-items-center min-h-screen p-4 surface-ground">
                <Card
                    title="Pagamento via PIX"
                    className="w-full md:w-30rem shadow-4"
                    header={
                        <div className="text-primary text-xl text-center p-3 border-bottom-1 surface-border">
                            Pagamento via PIX
                        </div>
                    }
                >
                    <form onSubmit={handleSubmit} className="flex flex-column gap-3">
                        <div className="flex flex-column gap-1">
                            <label htmlFor="amount" className="font-bold text-color-secondary">
                                Valor (R$)
                            </label>
                            <CurrencyInput
                                id="amount"
                                value={amount}
                                onChange={setAmount}
                                placeholder="R$ 0,00"
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-column gap-1">
                            <label htmlFor="description" className="font-bold text-color-secondary">
                                Descrição
                            </label>
                            <InputText
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full"
                                placeholder="Descrição do pagamento"
                                required
                            />
                        </div>

                        <div className="flex flex-column gap-1">
                            <label htmlFor="email" className="font-bold text-color-secondary">
                                E-mail
                            </label>
                            <InputText
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full"
                                placeholder="seu@email.com"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            label="Gerar PIX"
                            icon="pi pi-check"
                            loading={loading}
                            className="w-full mt-3"
                        />
                    </form>
                </Card>
            </div>
        </BlockUI>
    );
};

export default PixPaymentForm;
