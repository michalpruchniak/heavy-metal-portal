import Message from '@/components/Message/Message';
import useTranslation from '@/hooks/use-translate';
import { EditorContent } from '@tiptap/react';
import React from 'react';
import TextEditorToolbar from './__partials/components/TextEditorToolbar';
import useTextEditor from './__partials/hooks/useTextEditor';
import { TextEditorProps } from './__types/types';

const TextEditor: React.FC<TextEditorProps> = ({ value, limit = 500, onChange, name, label, className, error = '', ...props }) => {
    const { labels } = useTranslation();
    const editor = useTextEditor({ value, limit, onChange });
    if (!editor) {
        return null;
    }
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {label && (
                <label className={`font-inter text-[16px] leading-[22.4px] font-[400] dark:text-white ${error ? 'text-red-500' : 'text-[#000000]'}`}>
                    {label}
                </label>
            )}
            <div className="rounded-[20px] border" {...props}>
                <TextEditorToolbar editor={editor} />
                <div className="color-200 mb-[12px] text-[13px]">
                    <EditorContent editor={editor} />
                </div>
            </div>
            <span className="text-dark-100 dark:text-light-200 text-[13px] leading-[15px]">
                {labels.characters_remaining}: {limit - editor.storage.characterCount.characters()}
            </span>
            {error && <Message>{error}</Message>}
        </div>
    );
};

export default TextEditor;
