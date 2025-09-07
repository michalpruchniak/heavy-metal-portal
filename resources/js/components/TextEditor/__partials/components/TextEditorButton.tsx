import ButtonAction from '@/components/Button/ButtonAction';
import { TextEditorButtonProps } from '@/types';

const TextEditorButton = ({ command, isActive, children }: TextEditorButtonProps) => {
    const handleClick = () => {
        if (typeof command === 'function') {
            command();
        }
    };

    return (
        <ButtonAction isActive={isActive} onClick={handleClick}>
            {children}
        </ButtonAction>
    );
};

export default TextEditorButton;
