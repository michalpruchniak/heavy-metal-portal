import { DatePickerProps } from '@/types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RequiredStar from '../RequiredStar/RequiredStar';

const DatePickerInput = ({ label, value, onChange, error, required }: DatePickerProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label>
                {label} {required && <RequiredStar />}
            </label>
            <div>
                <DatePicker
                    selected={value}
                    onChange={onChange}
                    className="css-13cymwt-control min-h-[38px] !rounded-md border !border-gray-300 !bg-white px-[10px] py-[6px] dark:!border-gray-600 dark:!bg-[#0A0A0A] dark:!text-white"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="YYYY-MM-DD"
                />
            </div>
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};

export default DatePickerInput;
