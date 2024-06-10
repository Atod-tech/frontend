"use client";

import {
  Button,
  HeadingLevel2,
  PasswordInput,
  TextInput
} from "@src/components";
import { RouteConstants } from "@src/constants";
import { validationRules } from "@src/helpers";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  isSubmitting: boolean;
  submitFn: SubmitHandler<UserLogin>;
}
export function LoginComponent({ isSubmitting, submitFn }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLogin>();

  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <HeadingLevel2 className="">Log into your account</HeadingLevel2>
      <div className="mt-7">
        <TextInput
          name="email"
          type="email"
          placeholder="e.g johnsmith@someprovider.com"
          fieldError={errors.email}
          register={register}
        />

        <div className="mt-1">
          <PasswordInput
            name="password"
            fieldError={errors.password}
            registerOptions={{
              required: validationRules.requiredField
            }}
            register={register}
          />
        </div>
        <Button
          className="w-full mt-3"
          text="Login"
          onClick={handleSubmit(submitFn)}
          loading={isSubmitting}
        />

        <p className="mt-1 text-sm text-center">
          Forgot your password?{" "}
          <Link href={RouteConstants.FORGOT_PASSWORD} className="link">
            Reset password here
          </Link>
        </p>
      </div>
    </form>
  );
}
