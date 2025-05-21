import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import CharacterCount from '@tiptap/extension-character-count';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import { Editor, useEditor } from '@tiptap/react';
import { UseTextEditorParams } from '../../__types/types';

const useTextEditor = ({ value, limit, onChange }: UseTextEditorParams): Editor | null => {
    return useEditor({
        extensions: [Document, Paragraph, Text, Underline, Bold, Italic, Heading, BulletList, ListItem, CharacterCount.configure({ limit })],
        content: value,
        onUpdate: ({ editor }) => {
            if (onChange) {
                const updatedValue = editor.getHTML();
                onChange(updatedValue);
            }
        },
    });
};

export default useTextEditor;
