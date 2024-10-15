import { InputComponent } from "./InputComponent";


export interface PasswordInputProps {
  [key: string]: any;
}

export const PasswordInput = ({ validate, ...props }: PasswordInputProps) => {
  
  return (
    <div>
      <InputComponent
        type="password"
        validate={validate}
        {...props}
      />
    </div>
  );
};

