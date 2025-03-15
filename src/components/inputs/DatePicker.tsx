interface DatePickerProps {
    selectedDate: Date;
    onChange: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
} 