import { Link } from '@inertiajs/react';
import buttonVariants from './__partials/constants/buttonVariants';
import { ButtonLinkProps } from './__types/types';


const ButtonLink = ({ children, url, variant = 'primary' }: ButtonLinkProps) => {
    const className = buttonVariants[variant] ? buttonVariants[variant].className : buttonVariants['primary'].className;

    return (
        <Link className={`rounded-xl px-3 py-2 hover:no-underline ${className}`} href={url}>
            {children}
        </Link>
    );
};

export default ButtonLink;
