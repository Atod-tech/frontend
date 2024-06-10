"use client";

import {
  Button,
  HeadingLevel2,
  PasswordInput,
  TextInput
} from "@src/components";
import { Spinner } from "@src/components/svgs";
import { successToast, toastErrorMsg, validationRules } from "@src/helpers";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function () {
  const [showSpinner, setShowSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetPassword>();

  return (
    <div>
      <form onSubmit={() => {}}>
        <HeadingLevel2 className="mb-3 lg:mb-1.5">
          Reset My Password
        </HeadingLevel2>

        <p className="text-gray-600">
          Complete password reset with the OTP sent to your phone number
        </p>

        <div className="mt-7">
          <TextInput
            placeholder="Enter Otp"
            name="otp"
            fieldError={errors.otp}
            registerOptions={{
              required: validationRules.requiredField
            }}
            register={register}
          />

          <div className="mt-1">
            <PasswordInput
              name="password"
              placeholder="Enter New Password"
              fieldError={errors.password}
              registerOptions={{
                required: validationRules.requiredField
              }}
              register={register}
            />
          </div>
          <div className="mt-1">
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm New Password"
              fieldError={errors.confirmPassword}
              register={register}
              registerOptions={{
                required: validationRules.requiredField,
                // CROSS CHECK PASSWORDS
                validate: (value, values) =>
                  values.password === value || "passwords value does not match"
              }}
            />
          </div>
          <Button
            className="w-full mt-3"
            text="Reset Password"
            onClick={() => {}}
          />

          <p className="mt-1 text-sm text-center">
            Didn't receive an OTP?{" "}
            <button
              type="button"
              className="link inline-flex items-center"
              onClick={async () => {
                try {
                  setShowSpinner(true);

                  // MOCK LOADING STATE
                  setTimeout(() => {
                    setShowSpinner(false);
                    successToast(
                      "A new OTP has been sent to your email address"
                    );
                  }, 3000);
                } catch (error) {
                  toastErrorMsg(error);
                }
              }}
            >
              Resend now{" "}
              {showSpinner && (
                <Spinner className="w-5 h-5 ml-1 text-primary " />
              )}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
