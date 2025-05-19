import { Editor } from "@tiptap/core";
import { ReactNode } from "react";

export interface TextEditorProps {
    value: string;
    limit?: number;
    onChange: (value: string) => void;
    name?: string;
    label?: string;
    className?: string;
    error?: string;
}

export interface TextEditorButtonProps {
    editor: Editor;
    command: (() => void) | string;
    isActive: boolean;
    children: ReactNode;
  }

export interface TextEditorToolbarProps {
    editor: Editor;
}

export interface ToolbarButton {
    command: (() => void) | string;
    isActive: boolean;
    label: React.ReactNode;
}

export interface UseTextEditorParams {
    value: string;
    limit: number;
    onChange: (value: string) => void;
}
