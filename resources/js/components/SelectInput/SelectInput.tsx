import Message from '@/components/Message/Message';
import { SelectInputProps } from '@/types';
import { useId } from 'react';

const SelectInput = ({
    name,
    value,
    label,
    options,
    onChange,
    className = '',
    error = '',
}: SelectInputProps) => {
    const generatedId = useId();

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label
                    htmlFor={generatedId}
                    className={`font-inter leading-[22.4px] font-[400] dark:text-[16px] dark:text-white ${
                        error ? 'text-red-500' : 'text-[#000000]'
                    }`}
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
                className={`
                    !min-h-[38px] border !rounded-md px-[10px] py-[6px]
                    ${error ? '!border-red-400' : '!border-gray-300 dark:!border-gray-600'}
                    bg-black text-white
                    focus:!ring-1 focus:!ring-primary
                `}
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
