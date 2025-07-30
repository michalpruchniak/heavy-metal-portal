export type DatePickerProps = {
    label: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    error?: string;
    required?: boolean;
  };