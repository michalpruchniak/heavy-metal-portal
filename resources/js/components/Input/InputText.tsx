import Message from '../Message/Message';
import { InputTextProps } from './__types/types';

const InputText: React.FC<InputTextProps> = ({ value, onChange, name, label, className = '', error = '', ...props }) => {
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

            <input
                id={name}
                name={name}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-invalid={!!error}
                className='border borde-1 p-2 rounded-md'
                {...props}
            />

            {error && <Message>{error}</Message>}
        </div>
    );
};

export default InputText;
