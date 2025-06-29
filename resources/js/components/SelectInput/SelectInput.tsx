import Message from '@/components/Message/Message';
import { FC } from 'react';

type SelectInputProps = {
    name: string;
    value?: string;
    label?: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    className?: string;
    error?: string;
};

const SelectInput: FC<SelectInputProps> = ({
    name,
    value,
    label,
    options,
    onChange,
    className = '',
    error = '',
}) => {
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className={`font-inter text-[16px] leading-[22.4px] font-[400] ${error ? 'text-red-500' : 'text-[#000000]'}`}
                >
                    {label}
                </label>
            )}

            <select
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-invalid={!!error}
                className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            {error && <Message>{error}</Message>}
        </div>
    );
};

export default SelectInput;
