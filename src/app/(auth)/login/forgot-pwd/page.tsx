"use client";

import { Button, HeadingLevel2, TextInput } from "@src/components";
import { RouteConstants } from "@src/constants";
import { successToast, toastErrorMsg } from "@src/helpers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function () {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPassword>();

  // SUBMIT FORM
  const onSubmit: SubmitHandler<ForgotPassword> = async (data) => {
    try {
      successToast(
        "Reset password link has been sent to the specified email address"
      );
      push(`${RouteConstants.RESET_PASSWORD}`);
    } catch (error) {
      toastErrorMsg(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-lg mt-4 lg:text-2xl lg:mt-20 font-semibold leading-7 text-gray-900"></h2>
        <HeadingLevel2 className="mb-3 lg:mb-1.5">
          Reset My Password
        </HeadingLevel2>

        <p className="">
          Forgot your password? No worries! Enter your registered phone number
          to get instructions on how to reset your password.
        </p>

        <div className="mt-7">
          <TextInput
            name="email"
            placeholder="e.g johnsmith@someprovider.com"
            type="email"
            fieldError={errors.email}
            register={register}
          />

          <Button
            className="w-full mt-4"
            text="Send Instructions"
            onClick={handleSubmit(onSubmit)}
          />

          <p className="mt-1 text-sm text-center">
            Forgot your password?{" "}
            <Link href={RouteConstants.FORGOT_PASSWORD} className="link">
              Reset password here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
