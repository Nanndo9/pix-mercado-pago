export interface CurrencyInputProps {
    value: number;    
    onChange: (value: number) => void;
    id?: string;
    placeholder?: string;
    className?: string;
}