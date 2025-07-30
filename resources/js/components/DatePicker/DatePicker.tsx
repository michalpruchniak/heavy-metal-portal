import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerProps } from './__types/types';

const DatePickerInput = ({ label, value, onChange, error, required }: DatePickerProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label>
        {label} {required && '*'}
      </label>
      <div>
      <DatePicker
        selected={value}
        onChange={onChange}
        className="border rounded-md px-3 py-2 dark:bg-gray-800 dark:text-white"
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
      />
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default DatePickerInput;
