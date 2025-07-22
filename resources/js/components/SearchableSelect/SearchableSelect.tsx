import React from 'react';
import useTranslation from '@/hooks/use-translate';
import { useId } from 'react';
import Select, { SingleValue, MultiValue } from 'react-select';
import InputError from '../input-error';

export type Option = {
  value: string | number;
  label: string;
};

interface SearchableSelectProps {
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

const SearchableSelect = ({
  label = '',
  required = false,
  error = '',
  options = [],
  value = null,
  onChange,
  placeholder = '',
  isSearchable = true,
  noOptionsMessage,
  isMulti = true,
}:SearchableSelectProps) => {
  const generatedId = useId();
  const { labels } = useTranslation();

  const selectedOption = isMulti
    ? options.filter((option) => Array.isArray(value) && value.includes(option.value))
    : options.find((option) => option.value === value) ?? null;

  const handleChange = (
    selected: SingleValue<Option> | MultiValue<Option>
  ) => {
    if (isMulti) {
      const multiValues = (selected as MultiValue<Option>).map((opt) => opt.value);
      onChange(multiValues);
    } else {
      const singleValue = (selected as SingleValue<Option>)?.value ?? '';
      onChange(singleValue);
    }
  };

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={generatedId}>
          {label} {required && '*'}
        </label>
      )}
      <Select
        id={generatedId}
        isMulti={isMulti}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        isSearchable={isSearchable}
        noOptionsMessage={() => noOptionsMessage ?? labels.no_results_title}
        classNames={{
          control: () =>
            `border !border-[#E1E1E1] !bg-black ${error ? 'border-red-400' : 'border-gray-300'} !rounded-md px-[10px] py-[6px]`,
        }}
      />
      {error && <InputError message={error} />}
    </div>
  );
};

export default SearchableSelect;
