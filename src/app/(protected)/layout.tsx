"use client";

import { Sidenav } from "@src/components";

export default function Layout({ children }: RcProps) {
  return (
    <div className="flex h-screen relative">
      <Sidenav />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
