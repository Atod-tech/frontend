"use client";

import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

import { Spinner } from "../svgs";
import { classNames } from "@src/helpers";
import * as FormTypes from "@src/types/formElements";

export const TextInput = (props: FormTypes.Input) => {
  return <BaseInput {...props} type="text" />;
};

export const PasswordInput = (props: FormTypes.PasswordInput) => {
  const [secure, setSecure] = useState(true);

  return (
    <BaseInput
      {...props}
      placeholder={props.placeholder ?? "Enter Password"}
      type={secure ? "password" : "text"}
      suffixIcon={
        <div className="absolute right-2.5 top-2.5 flex gap-2">
          <div
            className="cursor-pointer select-none"
            onClick={() => {
              setSecure(!secure);
            }}
          >
            {secure ? (
              <EyeSlashIcon className="text-accentGradient w-4 h-4" />
            ) : (
              <EyeIcon className="text-accentGradient w-4 h-4" />
            )}
          </div>
        </div>
      }
    />
  );
};

const BaseInput = ({
  label,
  trailingLabelNode,
  type,
  name,
  placeholder,
  fieldError,
  prefixIcon,
  suffixIcon,
  register,
  registerOptions
}: FormTypes.Input) => {
  const htmlId = `id_${name}`;
  return (
    <>
      {label && (
        <label
          htmlFor={htmlId}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          <>
            {label} {trailingLabelNode}
          </>
        </label>
      )}
      <div className="relative my-1">
        {prefixIcon}
        <input
          id={htmlId}
          type={type}
          placeholder={placeholder}
          className={classNames("input", prefixIcon ? "pl-12 lg:pl-11" : "")}
          autoComplete="false"
          {...register?.(name, registerOptions)}
        />
        {suffixIcon}
        <span
          className={classNames(
            "text-red-500 text-xs block ml-0.5",
            fieldError ? "opacity-100" : "opacity-0"
          )}
        >
          {fieldError?.message || "placeholder"}
        </span>
      </div>
    </>
  );
};

export const Button = (props: FormTypes.ButtonProps) => {
  return (
    <button
      className={classNames(
        props.className ?? "text-base md:text-lg",
        "font-medium rounded-md text-white py-1.5 transition-[background] bg-primary/90 enabled:hover:bg-primary disabled:opacity-70 disabled:cursor-not-allowed"
      )}
      disabled={props.disabled}
      onClick={(e) => {
        e.preventDefault();
        props.onClick?.(e);
      }}
      type={props.type || "submit"}
    >
      {props.loading ? <Spinner className="w-5 h-5 m-auto" /> : props.text}
    </button>
  );
};
