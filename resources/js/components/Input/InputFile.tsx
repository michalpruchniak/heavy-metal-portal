import { InputFileProps } from '@/types';
import { useId } from 'react';
import Message from '../Message/Message';

const InputFile: React.FC<InputFileProps> = ({ onChange, name, label, className = '', error = '', ...props }) => {
    const generatedId = useId();
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && (
                <label
                    htmlFor={generatedId}
                    className={`font-inter text-[16px] leading-[22.4px] font-[400] dark:text-white ${error ? 'text-red-500' : 'text-[#000000]'}`}
                >
                    {label}
                </label>
            )}

            <input
                id={generatedId}
                name={name}
                type="file"
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        onChange(e.target.files[0]);
                    }
                }}
                aria-invalid={!!error}
                className="borde-1 rounded-md border p-2"
                {...props}
            />

            {error && <Message>{error}</Message>}
        </div>
    );
};

export default InputFile;
