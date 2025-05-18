const TextEditorButton = ({ editor, command, isActive, children }) => {
    const handleClick = () => {
        if (typeof command === 'string') {
            editor.chain().focus()[command]().run();
        }
        command();
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`rounded-[10px] bg-[#f7fcff] px-[16px] py-[3px] ${isActive ? 'tiptap-active-button' : ''}`}
        >
            {children}
        </button>
    );
};

export default TextEditorButton;
