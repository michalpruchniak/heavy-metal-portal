import { useId } from 'react';
import Message from '../Message/Message';
import RequiredStar from '../RequiredStar/RequiredStar';
import { InputTextProps } from './__types/types';

const InputText = ({
    value,
    onChange,
    name,
    label,
    required = false,
    className = '',
    error = '',
    ...props }: InputTextProps) => {
    const generatedId = useId();

    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && (
                <label
                    htmlFor={generatedId}
                    className={`font-inter text-[16px] leading-[22.4px] font-[400] dark:text-white ${error ? 'text-red-500' : 'text-[#000000]'}`}
                >
                    {label} {required && <RequiredStar />}
                </label>
            )}

            <input
                id={generatedId}
                name={name}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-invalid={!!error}
                className="borde-1 rounded-md border p-2"
                {...props}
            />

            {error && <Message>{error}</Message>}
        </div>
    );
};

export default InputText;
