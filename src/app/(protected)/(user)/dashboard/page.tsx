"use client";

import {
  // ChatBubbleBottomCenterTextIcon,
  HomeIcon
} from "@heroicons/react/24/solid";
import { Inter, Lato } from "next/font/google";

import {
  BuildingStorefrontIcon,
  ChatBubbleBottomCenterTextIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline";
import { classNames } from "@src/helpers";
import Link from "next/link";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const services = [
    "Cleaning",
    "plumbing",
    "electrician",
    "painting",
    "Chef",
    "mechanical repair"
  ];

  // REWRITE THIS PAGE
  return (
    <div className={classNames(inter.className, "pb-40")}>
      <div className="hidden md:block">Desktop version not available yet</div>
      <div className="md:hidden">
        {" "}
        <div className="mb-6">
          <h5 className="font-semibold text-lg">
            <span>Welcome,</span> John
          </h5>
          <p className="text-gray-500 font-medium">
            What services do you want to use
          </p>
        </div>
        <div className="relative mb-5">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
          </span>

          <input
            className="w-full pl-10 pr-4 rounded-md form-input focus:border-primary"
            type="text"
            placeholder="Search for services"
          />
        </div>
        <div className="mb-3">
          <h5 className={classNames(inter.className, "font-bold")}>Services</h5>
        </div>
        <div className="">
          <Slider
            // dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            // dotsClass="slick-dots"
            autoplay={false}
            autoplaySpeed={3000}
            arrows={false}
            className="bg-white rounded-lg"
          >
            {services.map((service) => (
              <div className="rounded-lg px-3 py-4 bg-white shadow-lg w-9/10">
                <Image
                  height={300}
                  width={900}
                  src="https://picsum.photos/900/300"
                  className="rounded-lg"
                  alt="some alt"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full min-h-20 rounded-lg flex justify-center items-center mt-12 mb-5 bg-white shadow-xl ">
          <p className="text-gray-500">Some banner or slider for promotions</p>
        </div>
        {/* Best Services */}
        <div className="flex justify-between items-center mb-3">
          <h5 className="font-bold">Best Offers</h5>
          <Link href="#" className="text-primary underline">
            See all
          </Link>
        </div>
        <div className="flex flex-col gap-y-5">
          {services.map((service) => (
            <div className="rounded-lg bg-white shadow-lg">
              <div className="relative">
                <Image
                  height={300}
                  width={900}
                  src="https://picsum.photos/900/300"
                  alt="Foo bar zzz"
                  className="rounded-t-lg w-full"
                />
                <div className="absolute top-0 right-0 bg-primary px-2 rounded-tr-lg rounded-bl-lg">
                  <span className="flex place-content-center text-white font-bold">
                    40% Off
                  </span>
                </div>
              </div>

              <div className="px-3 pb-8">
                <h5 className="mt-2.5 font-bold text-primary capitalize">
                  {service}
                </h5>
                <p className="text-gray-500 leading-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  alias et laborum, quisquam iure dignissimos eveniet earum nemo
                  numquam minus?
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed inset-x-0 bottom-0 bg-white text-gray-500 px-2 py-3 inset flex justify-between items-center text border-t border-black/50">
          <div className="text-primary flex flex-col items-center">
            <HomeIcon className="h-6 w-6 " />
            <p className="text-xs">Home</p>
          </div>
          <div className="flex flex-col items-center">
            <DevicePhoneMobileIcon className="h-6 w-6" />
            <p className="text-xs">Placeholder</p>
          </div>
          <div className="flex flex-col items-center">
            <BuildingStorefrontIcon className="h-6 w-6" />
            <p className="text-xs">Services</p>
          </div>
          <div className="flex flex-col items-center">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
            <p className="text-xs">Messages</p>
          </div>
          <div className="flex flex-col items-center">
            <UserCircleIcon className="h-6 w-6" />
            <p className="text-xs">Me</p>
          </div>
        </div>
      </div>
    </div>
  );
}
