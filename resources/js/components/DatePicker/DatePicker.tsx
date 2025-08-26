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
        className="min-h-[38px] border !rounded-md px-[10px] py-[6px] !border-gray-300 dark:!border-gray-600 !bg-white dark:!bg-[#0A0A0A] dark:!text-white css-13cymwt-control"
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
      />
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default DatePickerInput;
