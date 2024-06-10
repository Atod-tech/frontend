"use client";

import {
  Button,
  HeadingLevel2,
  PasswordInput,
  TextInput
} from "@src/components";
import { RouteConstants } from "@src/constants";
import { successToast, toastErrorMsg, validationRules } from "@src/helpers";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Register() {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserRegister>();

  // SUBMIT FORM
  const onSubmit: SubmitHandler<UserRegister> = async (data) => {
    try {
      successToast("Registered Successfully");
      push(`${RouteConstants.VERIFY_ACCOUNT}`);
    } catch (error) {
      toastErrorMsg(error);
    }
  };
  return (
    <>
      <HeadingLevel2 className="">Create an account</HeadingLevel2>

      {/* <p className="hidden lg:block text-gray-500 mt-2 text-sm">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
    nesciunt quis nobis nostrum architecto tempora.
  </p> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-7">
          <TextInput
            name="fullname"
            placeholder="e.g John Smith"
            type="text"
            fieldError={errors.fullname}
            register={register}
          />

          <TextInput
            name="email"
            placeholder="e.g johnsmith@someprovider.com"
            type="email"
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
            className="w-full lg:mt-4"
            text="Register"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </>
  );
}
