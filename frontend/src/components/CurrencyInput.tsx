import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { CurrencyInputProps } from '../interfaces/CurrencyInput';



export const CurrencyInput: React.FC<CurrencyInputProps> = ({
    value,
    onChange,
    id,
    placeholder,
    className
}) => {
    const [displayValue, setDisplayValue] = useState('');

    const formatCurrency = (val: number): string => {
        if (!val) return '';
        return val.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    useEffect(() => {
        setDisplayValue(formatCurrency(value));
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleaned = e.target.value.replace(/\D/g, '');
        if (!cleaned) {
            onChange(0);
            setDisplayValue('');
            return;
        }
        const numericValue = parseInt(cleaned, 10) / 100;
        onChange(numericValue);
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
