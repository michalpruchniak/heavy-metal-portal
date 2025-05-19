import { ReactNode } from "react";
import buttonVariants from "../__partials/constants/buttonVariants";

export type VariantType = 'primary' | 'secondary' | 'link';

export type ButtonVariant = {
    className: string;
    isActive: string;
};
export interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    isActive: boolean,
    variant?: keyof typeof buttonVariants;
}

export interface ButtonLinkProps {
    children: string;
    url: string;
    variant?: keyof typeof buttonVariants;
}