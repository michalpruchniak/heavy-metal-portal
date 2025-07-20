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
