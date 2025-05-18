import React from "react";
import TextEditorButton from "./TextEditorButton";
import { Editor } from "@tiptap/react";

interface TextEditorToolbarProps {
  editor: Editor;
}

interface ToolbarButton {
  command: (() => void) | string;
  isActive: boolean;
  label: React.ReactNode;
}

const TextEditorToolbar: React.FC<TextEditorToolbarProps> = ({ editor }) => {
  const buttons: ToolbarButton[] = [
    {
      command: 'toggleBold',
      isActive: editor.isActive('bold'),
      label: <strong>B</strong>,
    },
    {
      command: 'toggleItalic',
      isActive: editor.isActive('italic'),
      label: <i>I</i>,
    },
    {
      command: 'toggleUnderline',
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
          <TextEditorButton
            key={index}
            editor={editor}
            command={btn.command}
            isActive={btn.isActive}
          >
            {btn.label}
          </TextEditorButton>
        ))}
      </div>
    </div>
  );
};

export default TextEditorToolbar;
