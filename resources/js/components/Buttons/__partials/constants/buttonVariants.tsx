import { ButtonVariant, VariantType } from '../../_types/types';

const type: Record<'button' | 'link', string> = {
    button: 'px-3 py-2 rounded-xl hover:no-underline',
    link: 'hover:no-underline',
};

const buttonVariants: Record<VariantType, ButtonVariant> = {
    primary: {
        className: `${type.button} text-white bg-primary-500 hover:bg-primary-400 transition-colors duration-300`,
    },
    secondary: {
        className: `${type.button} text-light-100 bg-secondary-500 hover:bg-secondary-400 transition-colors duration-300`,
    },
    link: {
        className: `${type.link} hover:text-primary-300 dark:hover:text-primary-200`,
    },
};

export default buttonVariants;
