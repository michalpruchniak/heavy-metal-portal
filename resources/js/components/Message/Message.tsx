import { ReactNode } from "react"
import messageVariant from "./__partials/constants/messageVariant"

interface MessageProps {
    variant?: keyof typeof messageVariant,
    children: ReactNode
}

const Message = ({ children, variant = 'error' }: MessageProps) => {
    const className = messageVariant[variant]?.className || messageVariant['error']?.className;

    return(
        <div className={`w-full px-[20px] py-[13px] rounded-md text-[21px] ${className}`}>{children}</div>
    )
}

export default Message