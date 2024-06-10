import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RootProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X – Find Home Service Providers Easily",
  description: "Some amazing description about X"
};

export default function RootLayout({ children }: RcProps) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children} </RootProvider>
      </body>
    </html>
  );
}
