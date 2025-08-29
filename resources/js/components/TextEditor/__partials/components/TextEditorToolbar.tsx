import React from 'react';
import TextEditorButton from './TextEditorButton';
import { TextEditorToolbarProps, ToolbarButton } from '@/types';

const TextEditorToolbar: React.FC<TextEditorToolbarProps> = ({ editor }) => {
    const buttons: ToolbarButton[] = [
        {
            command: () => editor.chain().focus().toggleBold().run(),
            isActive: editor.isActive('bold'),
            label: <strong>B</strong>,
        },
        {
            command: () => editor.chain().focus().toggleItalic().run(),
            isActive: editor.isActive('italic'),
            label: <i>I</i>,
        },
        {
            command: () => editor.chain().focus().toggleUnderline().run(),
            isActive: editor.isActive('underline'),
            label: <u>U</u>,
        },
        {
            command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: editor.isActive('heading', { level: 2 }),
            label: <strong>H2</strong>,
        },
        {
            command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            isActive: editor.isActive('heading', { level: 3 }),
            label: <strong>H3</strong>,
        },
    ];

    return (
        <div className="control-group border-b px-[15px]">
            <div className="flex flex-wrap gap-[10px] py-[10px]">
                {buttons.map((btn, index) => (
                    <TextEditorButton key={index} editor={editor} command={btn.command} isActive={btn.isActive}>
                        {btn.label}
                    </TextEditorButton>
                ))}
            </div>
        </div>
    );
};

export default TextEditorToolbar;
