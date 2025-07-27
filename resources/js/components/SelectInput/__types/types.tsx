export type SelectInputProps = {
    name: string;
    value?: string;
    label?: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    className?: string;
    error?: string;
};
