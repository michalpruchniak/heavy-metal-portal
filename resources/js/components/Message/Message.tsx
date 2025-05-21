import messageVariant from './__partials/constants/messageVariant';
import { MessageProps } from './__types/types';

const Message = ({ children, variant = 'error' }: MessageProps) => {
    const className = messageVariant[variant]?.className || messageVariant['error']?.className;

    return <div className={`w-full rounded-md px-[20px] py-[13px] text-[21px] ${className}`}>{children}</div>;
};

export default Message;
