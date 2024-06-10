"use client";

import { useEffect } from "react";
import { Spinner } from "@src/components";
import { useRouter } from "next/navigation";
import { RouteConstants } from "@src/constants";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(RouteConstants.LOGIN);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <Spinner className="text-primary w-10 h-10" />
      <h2 className="font-medium">Redirecting...</h2>
    </div>
  );
}
