import { useId } from 'react';
import Select, { MultiValue } from 'react-select';
import { useAppearance } from '@/hooks/use-appearance';
import useTranslation from '@/hooks/use-translate';
import InputError from '../input-error';
import RequiredStar from '../RequiredStar/RequiredStar';
import { Option, SearchableMultipleSelectProps } from '@/types';

const SearchableMultipleSelect = ({
  label = '',
  required = false,
  error = '',
  options = [],
  value = [],
  onChange,
  placeholder = '',
  noOptionsMessage,
}: SearchableMultipleSelectProps) => {
  const generatedId = useId();
  const { appearance } = useAppearance();
  const { labels } = useTranslation();

  const selectedOptions = options.filter(opt => value.includes(opt.value));

  const handleChange = (selected: MultiValue<Option>) => {
    onChange(selected.map(opt => opt.value));
  };

  const getClassNames = {
    control: ({ isFocused }: { isFocused: boolean }) =>
      `!min-h-[38px] border !rounded-md px-[10px] py-[6px] ${
        error ? '!border-red-400' : '!border-gray-300 dark:!border-gray-600'
      } ${isFocused ? '!ring-1 !ring-primary' : ''} !bg-white dark:!bg-[#0A0A0A] dark:!text-white`,
    singleValue: () => 'text-black dark:!text-white',
    menu: () => '!bg-white dark:!bg-dark-500',
  };

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={generatedId} className="text-gray-800 dark:text-gray-200">
          {label} {required && <RequiredStar />}
        </label>
      )}
      <Select
        inputId={generatedId}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        isSearchable
        noOptionsMessage={() => noOptionsMessage ?? labels.no_results_title}
        classNames={getClassNames}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: appearance === 'light' ? '#FFF' : '#293544',
          },
        })}
      />
      {error && <InputError message={error} />}
    </div>
  );
};

export default SearchableMultipleSelect;
