export interface InputTextProps {
    value?: string;
    onChange: (value: string) => void;
    name?: string;
    label?: string;
    className?: string;
    error?: string;
    type?: string;
    required?: boolean;
}

export interface InputFileProps {
    value?: string;
    onChange: (value: File) => void;
    name?: string;
    label?: string;
    className?: string;
    error?: string;
    type?: string;
}
