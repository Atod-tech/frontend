"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouteConstants } from "@src/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Slider from "react-slick";

export default function Layout({ children }: RcProps) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-[100vh] flex justify-center items-center lg:bg-white lg:justify-evenly overflow-hidden">
      <div className="px-4 py-8 rounded-lg w-[400px] md:w-5/6 lg:flex-1 lg:w-2/4 lg:px-28 lg:py-10">
        <Link href={RouteConstants.HOME}>
          <h1 className="text-3xl text-primary font-black"> X APP LOGO</h1>
          {/* <Image
            className="hidden mx-auto lg:mx-0 lg:block"
            src="https://picsum.photos/200/100"
            width={179}
            height={22}
            alt="X Logo"
          /> */}
        </Link>

        {children}

        <p className="mt-4 text-sm text-center">
          {pathname.includes("/login") ? (
            <>
              Don't have an account?{" "}
              <Link href={RouteConstants.REGISTER} className="link">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href={RouteConstants.LOGIN} className="link">
                Sign In
              </Link>
            </>
          )}
        </p>
      </div>
      <div className="hidden sticky inset-0 w-2/4 lg:block lg:bg-primary min-h-[100vh]">
        <div className="relative">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            dotsClass="slick-dots !bottom-10"
            autoplay={true}
            autoplaySpeed={3000}
            nextArrow={undefined}
            prevArrow={undefined}
          >
            <div className="bg-red-500 h-screen"></div>
            <div className="bg-green-500 h-screen"></div>
            <div className="bg-blue-500 h-screen"></div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
