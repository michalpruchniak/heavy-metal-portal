import ButtonAction from '@/components/Button/ButtonAction';
import { TextEditorButtonProps } from '@/types';

const TextEditorButton: React.FC<TextEditorButtonProps> = ({ command, isActive, children }) => {
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
