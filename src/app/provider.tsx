"use client";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryProvider } from "@src/config";
import { UIProvider } from "@src/store";
import { UserProvider } from "@src/store/userStore";
import { Slide, ToastContainer } from "react-toastify";

export default function RootProvider({ children }: RcProps) {
  return (
    <ReactQueryProvider>
      <UIProvider>
        <UserProvider>
          {children}

          <ToastContainer
            transition={Slide}
            autoClose={3000}
            position="top-right"
            theme="light"
            hideProgressBar={true}
            icon={false}
            closeButton={false}
          />
        </UserProvider>
      </UIProvider>
    </ReactQueryProvider>
  );
}
