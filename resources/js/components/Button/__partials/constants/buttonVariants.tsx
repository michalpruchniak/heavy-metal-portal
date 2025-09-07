import { ButtonTypes, ButtonVariants } from '@/types';

const type: ButtonTypes = {
    button: 'px-4 py-2 rounded-md font-semibold',
    link: 'underline font-medium cursor-pointer',
};

const buttonVariants: ButtonVariants = {
    primary: {
        className: `${type.button} text-white bg-primary-500 hover:bg-primary-400 transition-colors duration-300`,
        isActive: `!bg-secondary-500`,
    },
    secondary: {
        className: `${type.button} text-light-100 bg-secondary-500 hover:bg-secondary-400 transition-colors duration-300`,
        isActive: `!bg-secondary-500`,
    },
    link: {
        className: `${type.link} hover:text-primary-300 dark:hover:text-primary-200`,
        isActive: `!text-primary-500`,
    },
};

export default buttonVariants;
