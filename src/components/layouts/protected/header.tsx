"use client";

import {
  ArrowLeftStartOnRectangleIcon,
  Bars3BottomLeftIcon,
  BellIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";

import { UserCircleIcon as UserCircleIconSolid } from "@heroicons/react/24/solid";
import { classNames } from "@src/helpers";
import { useUIStore } from "@src/store";
import Link from "next/link";

// TODO: CONVERT NOTIFICATIONS PAGE TO A DROPDOWN WITH INFINITE SCROLLING
export function Header() {
  const {
    profileDropdownOpen,
    notificationOpen,

    openSidebar,
    openNotification,
    openProfileDropdown
  } = useUIStore();

  return (
    <>
      {/* <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600"> */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-2xl">
        <div className="flex items-center">
          <button
            onClick={() => openSidebar(true)}
            className="text-gray-500 focus:outline-none lg:hidden"
          >
            <Bars3BottomLeftIcon className="w-6 h-6" />
          </button>

          {/* <div className="relative mx-4 lg:mx-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            </span>

            <input
              className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600"
              type="text"
              placeholder="Search"
            />
          </div> */}
        </div>

        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={() => openNotification(!notificationOpen)}
              className={classNames(
                "flex mx-4 text-gray-600 focus:outline-none relative hover:animate-none"
              )}
            >
              <BellIcon className="w-6 h-6" />

              <div className="w-5 h-5 bg-red-600 rounded-full text-[8px] text-white flex justify-center items-center absolute -top-2.5 -right-1.5">
                99+
              </div>
            </button>

            {notificationOpen && (
              <>
                <div
                  onClick={() => openNotification(false)}
                  className="fixed inset-0 z-10 w-full h-full"
                ></div>

                <div
                  className="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80"
                  style={{ width: "20rem;" }}
                >
                  <a className="group flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600">
                    <div className="mx-1 rounded-full">
                      <CheckCircleIcon className="w-8 h-8 text-green-800 group-hover:text-white" />
                    </div>

                    <p className="mx-2 text-sm">
                      Your <span className="font-bold">Proof of Funds</span>{" "}
                      loan request has been approved . 3h
                    </p>
                  </a>
                  <a className="group flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600">
                    <div className="mx-1 rounded-full">
                      <InformationCircleIcon className="w-8 h-8 text-yellow-500 group-hover:text-white" />
                    </div>

                    <p className="mx-2 text-sm">
                      A request mail has been sent to your email address . 3h
                    </p>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600"
                  >
                    <div className="mx-1 rounded-full">
                      <ExclamationCircleIcon className="w-8 h-8 text-red-800 group-hover:text-white" />
                    </div>
                    <p className="mx-2 text-sm">
                      Your Loan Request has been declined . 3h
                    </p>
                  </a>
                </div>
              </>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => openProfileDropdown(!profileDropdownOpen)}
              className="block overflow-hidden rounded-full shadow focus:outline-none"
            >
              <UserCircleIconSolid className="w-8 h-8" fill="#333" />
            </button>

            {/* <button
              onClick={() => openProfileDropdown(!profileDropdownOpen)}
              className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
            >
              <UserCircleIconSolid />
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                alt="Your avatar"
              /> 
            </button> */}

            {profileDropdownOpen && (
              <>
                <div
                  onClick={() => openProfileDropdown(false)}
                  className="fixed inset-0 z-10 w-full h-full"
                ></div>

                <div className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                  <Link
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >
                    <UserCircleIcon className="w-6 h-6 mr-2" />
                    Profile
                  </Link>

                  <button
                    type="button"
                    onClick={() => {}}
                    className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >
                    <ArrowLeftStartOnRectangleIcon className="w-6 h-6 mr-2" />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
