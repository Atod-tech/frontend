import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

// UNITE INPUT TYPES

// EXTENDING THIS INTERFACE IS FORCING ME TO IMPORT AND I CANNOT DO THAT IN A D.TS FILE
// interface Input extends InputHTMLAttributes<HTMLInputElement> {

export interface Input {
  type?: "text" | "email" | "number" | "password";
  label?: string;
  name: string;
  placeholder?: string;
  fieldError?: FieldError;
  trailingLabelNode?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  register?: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
}

export interface PasswordInput extends Input {
  inputClassNames?: string;
}

export interface ButtonProps {
  className?: string;
  text: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: "submit" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
