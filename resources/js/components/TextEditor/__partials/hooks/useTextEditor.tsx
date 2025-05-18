import { useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Heading from '@tiptap/extension-heading';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import CharacterCount from '@tiptap/extension-character-count';
import { Editor } from '@tiptap/react';

interface UseTextEditorParams {
    value: string;
    limit: number;
    onChange: (value: string) => void;
}

const useTextEditor = ({ value, limit, onChange }: UseTextEditorParams): Editor | null => {
    return useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Underline,
            Bold,
            Italic,
            Heading,
            BulletList,
            ListItem,
            CharacterCount.configure({ limit })
        ],
        content: value,
        onUpdate: ({ editor }) => {
            if (onChange) {
                const updatedValue = editor.getHTML();
                onChange(updatedValue);
            }
        }
    });
};

export default useTextEditor;
