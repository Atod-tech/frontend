"use client";

import { RouteConstants } from "@src/constants";
import { successToast, toastErrorMsg } from "@src/helpers";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { LoginComponent } from "@src/components/auth";

export default function Login() {
  const { push } = useRouter();

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    try {
      successToast("Logged In Successfully");
      push(RouteConstants.DASHBOARD);
    } catch (error) {
      toastErrorMsg(error);
    }
  };

  return <LoginComponent isSubmitting={false} submitFn={onSubmit} />;
}
