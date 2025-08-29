import { ButtonProps } from '@/types';
import buttonVariants from './__partials/constants/buttonVariants';

const ButtonAction = ({ children, onClick, variant = 'primary', isActive = false }: ButtonProps) => {
    const className = buttonVariants[variant]?.className || buttonVariants['primary'].className;
    const isActiveClassName = buttonVariants[variant]?.isActive || buttonVariants['primary'].isActive;

    return (
        <button type="button" className={`rounded-xl px-3 py-2 hover:no-underline ${className} ${isActive && isActiveClassName}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonAction;
