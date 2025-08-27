export type Option = {
    value: string;
    label: string;
};

export interface SingleSelectProps {
    isMulti?: false;
    value: string | number | null | undefined;
    onChange: (value: string | number | null | undefined) => void;
}

export interface MultiSelectProps {
    isMulti: true;
    value: (string | number)[];
    onChange: (value: (string | number)[]) => void;
}

interface SharedProps {
    label?: string;
    required?: boolean;
    error?: string;
    options: Option[];
    placeholder?: string;
    isSearchable?: boolean;
    noOptionsMessage?: string;
}

export type SearchableSelectProps = SharedProps & (SingleSelectProps | MultiSelectProps);
