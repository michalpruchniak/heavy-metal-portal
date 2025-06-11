import { ReactNode } from "react";
import messageVariant from "../__partials/constants/messageVariant";

export interface MessageProps {
    variant?: keyof typeof messageVariant;
    children: ReactNode;
}