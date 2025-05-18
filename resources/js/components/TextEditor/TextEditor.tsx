import { EditorContent } from '@tiptap/react';
import TextEditorToolbar from './__partials/components/TextEditorToolbar'
import useTranslation from '@/hooks/use-translate';
import useTextEditor from './__partials/hooks/useTextEditor'
import React from 'react';

interface TextEditorProps {
    value: string;
    limit?: number;
    onChange: (value: string) => void;
    name?: string;
    label?: string;
    className?: string;
    error?: string;
}

const TextEditor: React.FC<TextEditorProps> = ({
    value,
    limit = 500,
    onChange,
    name,
    label,
    className,
    error = '',
    ...props
}) => {
    const translations = useTranslation();
    const editor = useTextEditor({ value, limit, onChange });
    if (!editor) {
        return null;
    }
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && (
                <label
                    className={`font-inter text-[16px] font-[400] leading-[22.4px] ${error ? 'text-red-500' : 'text-[#000000]'}`}
                >
                    {label}
                </label>
            )}
            <div className="rounded-[20px] border" {...props}>
                    <TextEditorToolbar editor={editor} />
                <div className="color-200 mb-[12px] text-[13px]">
                    <EditorContent editor={editor} />
                </div>
            </div>
            <span className="text-[13px] leading-[15px] text-dark-100">
                {translations.labels.characters_remaining}: {limit - editor.storage.characterCount.characters()}
            </span>
        </div>
    );
};

export default TextEditor;
