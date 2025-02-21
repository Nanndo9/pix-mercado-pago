import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';

interface CurrencyInputProps {
    value: string;
    onChange: (value: string) => void;
    id?: string;
    placeholder?: string;
    className?: string;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
    value,
    onChange,
    id,
    placeholder,
    className
}) => {
    const [displayValue, setDisplayValue] = useState('');

    const formatCurrency = (val: string): string => {
        const cleaned = val.replace(/\D/g, '');
        if (!cleaned) return '';
        const numericValue = parseInt(cleaned, 10);
        const amount = numericValue / 100;
        return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    useEffect(() => {
        setDisplayValue(formatCurrency(value));
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleaned = e.target.value.replace(/\D/g, '');
        onChange(cleaned);
    };

    return (
        <InputText
            id={id}
            value={displayValue}
            onChange={handleChange}
            placeholder={placeholder}
            className={className}
        />
    );
};
