"use client";
import Image from "next/image";
import Link from "next/link";
import MobileNavComponent from "../MobileNav/MobileNavComponent";
import React, { useEffect, useState } from "react";
import { HiOutlineX, HiMenuAlt4 } from "react-icons/hi";

type HeaderProps = {};

const Header = ({}) => {
  const [isActive, setIsActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className="bg-beige w-full flex">
      <div className="flex w-full md:w-[90%] mx-auto justify-center md:justify-between">
        <div className="flex space-x-56 items-center justify-center">
          <Link href="/">
            <Image src="/logo.png" width={130} height={130} alt="Logo" />
          </Link>
          <button
            className={`${
              mobileNav ? "fixed top-11 right-4" : "relative"
            } z-40 my-auto bg-white p-1 rounded-full border-[2px] border-brown md:hidden`}
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? (
              <HiOutlineX className="text-3xl text-brown" />
            ) : (
              <HiMenuAlt4 className="text-3xl text-brown" />
            )}
          </button>
        </div>
        <nav className="hidden md:flex items-center justify-center space-x-8">
          <Link
            className="text-brown text-xl font-bold hover:text-white duration-300"
            href="#lessons"
          >
            Майстер-класи
          </Link>
          <Link
            className="text-brown text-lg font-bold hover:text-white duration-300"
            href="#lessons"
          >
            Курси
          </Link>
          <Link
            className="text-brown text-lg font-bold hover:text-white duration-300"
            href="#about"
          >
            Про нас
          </Link>
          <Link
            className="text-brown text-lg font-bold hover:text-white duration-300"
            href="#footer"
          >
            Контакти
          </Link>
          <Link
            className="text-white text-lg font-bold hover:bg-white hover:text-brown bg-clay py-2 px-4 rounded-full duration-300"
            href="#contact"
          >
            Записатися
          </Link>
        </nav>
      </div>
      <div
        className={`${
          mobileNav ? "top-0" : "-top-full"
        } z-20 fixed bottom-0 w-full h-[325px] lg:hidden`}
      >
        <MobileNavComponent />
      </div>
    </header>
  );
};

export default Header;
