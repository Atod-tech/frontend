"use client";

import { Button, HeadingLevel2 } from "@src/components";

export default function VerifyAccount() {
  return (
    <>
      <HeadingLevel2 className="">Verify Account</HeadingLevel2>

      <form onSubmit={() => {}}>
        <div className="mt-7">Some form here or something</div>
        <Button className="w-full lg:mt-4" text="Register" onClick={() => {}} />
      </form>
    </>
  );
}
