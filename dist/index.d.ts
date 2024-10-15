import * as React from 'react';
import React__default from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface RadioButtonProps {
    options: Array<{
        value: string;
        label: string;
    }>;
    selectedValue: string;
    onChange: (e: React__default.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

interface DateInputProps {
    minDate?: string;
    maxDate?: string;
    value: string;
    label?: string;
    disabledDays?: (date: Date) => boolean;
    onDateChange: (date: string) => void;
    name: string;
}

interface FileInputProps {
    accept?: string;
    onChange: (files: FileList | null) => void;
    [key: string]: any;
}

interface PasswordInputProps {
    [key: string]: any;
}

interface CustomFormProps {
    onSubmit: (data: Record<string, any>) => void;
    children: React__default.ReactNode;
    className?: string;
}

interface InputProps {
    type: string;
    validate?: (value: string) => string;
    value?: string;
    debounce?: boolean;
    debounceDelay?: number;
    onChange?: (e: React__default.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
}

declare const _default: {
    InputComponent: ({ type, validate, onChange, debounce, debounceDelay, value, ...props }: InputProps) => react_jsx_runtime.JSX.Element;
    FormComponent: React.FC<CustomFormProps>;
    UsernameInput: (props: any) => react_jsx_runtime.JSX.Element;
    PasswordInput: ({ validate, ...props }: PasswordInputProps) => react_jsx_runtime.JSX.Element;
    EmailInput: (props: any) => react_jsx_runtime.JSX.Element;
    FileInput: ({ accept, onChange, ...props }: FileInputProps) => react_jsx_runtime.JSX.Element;
    DateInput: ({ minDate, maxDate, value, label, disabledDays, onDateChange, name, ...props }: DateInputProps) => react_jsx_runtime.JSX.Element;
    RadioButton: ({ options, selectedValue, onChange, name }: RadioButtonProps) => react_jsx_runtime.JSX.Element;
    validatePassword: (password: string) => string;
    sanitizeInput: (value: string) => string;
    useDebounce: (value: any, delay: number) => any;
};

export { type CustomFormProps, type DateInputProps, type FileInputProps, type InputProps, type PasswordInputProps, type RadioButtonProps, _default as default };
