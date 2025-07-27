export type Option = {
    value: string;
    label: string;
};

export interface ReactSelectProps {
    options: Option[];
    onChange: (value: string | string[] | null) => void;
    placeholder?: string;
    isMulti?: boolean;
    value?: string | string[] | null;
    label?: string;
    name?: string;
    error?: string;
    className?: string;
}

export interface SearchableSelectProps {
    label?: string;
    required?: boolean;
    error?: string;
    options: Option[];
    value: string | number | null | Array<string | number>;
    onChange: (value: string | number | '' | Array<string | number>) => void;
    placeholder?: string;
    isSearchable?: boolean;
    noOptionsMessage?: string;
    isMulti?: boolean;
}