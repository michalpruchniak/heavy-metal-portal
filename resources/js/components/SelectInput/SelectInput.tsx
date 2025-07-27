import Message from '@/components/Message/Message';
import { useId } from 'react';
import { SelectInputProps } from './__types/types';

const SelectInput = ({ name, value, label, options, onChange, className = '', error = '' }: SelectInputProps) => {
    const generatedId = useId();
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && (
                <label
                    htmlFor={generatedId}
                    className={`font-inter dark: text-[16px] leading-[22.4px] font-[400] text-white ${error ? 'text-red-500' : 'text-[#000000]'}`}
                >
                    {label}
                </label>
            )}

            <select
                id={generatedId}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-invalid={!!error}
                className="borde-1 rounded-md border p-2"
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
