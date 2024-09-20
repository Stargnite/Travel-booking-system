"use client"

import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


// import {
// 	SignInButton,
// 	UserButton
// } from '@clerk/nextjs'
// import { auth } from '@clerk/nextjs/server'
import { useState } from "react"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const { userId }: { userId: string | null } = auth()

  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5 ">
        <div className="flex items-center px-5 w-full justify-between">
          <Link href={"/"}>
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="hidden h-full gap-12 lg:flex items-center">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flexCenter gap-3">
            <button
              className={`flexCenter gap-3 rounded-full bg-green-90 transition-all text-white hover:bg-black px-4 py-2 lg:btn_dark_green`}
              type="button">
              <Image src="/user.svg" alt="avatar" height={24} width={24} />
              <label className='bol-16 whitespace-nowrap'>
                Sign in
              </label>
            </button>

            <div onClick={() => setNav(!nav)} className="flex lg:hidden cursor-pointer">
              <RxHamburgerMenu size={30} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[100%]  h-screen bg-black/90 z-10 duration-700 overflow-y-scroll"
              : "fixed top-0 left-[-100%] w-[100%] h-screen bg-black/80 z-10 duration-700 overflow-y-scroll delay-200"
          }
        >
          <div
            className={
              nav
                ? "fixed top-0 left-0 w-[80%] md:w-[60%] h-screen bg-white z-10 duration-700 overflow-y-scroll delay-200 rounded-tr-3xl rounded-br-3xl"
                : "fixed top-0 left-[-100%] w-[80%] md:w-[60%] h-screen bg-white z-10 duration-700 overflow-y-scroll"
            }
          >
            <div className="absolute top-3 right-5">
              <IoClose size={30} onClick={() => setNav(false)} />
            </div>
            <div className="mt-20 flex flex-col w-full items-center space-y-7 px-5">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </Link>
              ))}

              <button className="bg-[#434343] flex w-full justify-center text-xl font-[400] text-white px-5 py-3 rounded-lg mx-2">
                <Link href="/">Get started</Link>
              </button>
            </div>

            {/* <div
              className="mt-20 flex flex-col w-full items-center space-y-7 px-5"
            // onClick={() => setNav(false)}
            >
              <Link
                href="/"
                className="active:underline font-semibold text-[18px] leading-6 text-[#333333] hover:underline"
              >
                Home
              </Link>
              <Link
                href="/"
                className="active:underline font-semibold text-[18px] leading-6 text-[#333333] hover:underline"
              >
                <p>Service</p>
              </Link>
              <Link
                href="/"
                className="active:underline font-semibold text-[18px] leading-6 text-[#333333] hover:underline"
              >
                <p className="">Bookings</p>
              </Link>
              <Link
                href="/"
                className="active:underline font-semibold text-[18px] leading-6 text-[#333333] hover:underline"
              >
                <p>Contact Us</p>
              </Link>

              <button className="bg-[#434343] flex w-full justify-center text-xl font-[400] text-white px-5 py-3 rounded-lg mx-2">
                <Link href="/">Get started</Link>
              </button>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
