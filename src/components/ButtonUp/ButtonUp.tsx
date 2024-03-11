"use client"
import { IoIosArrowUp } from "react-icons/io";
import React, { useState, useEffect } from "react";

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`sticky w-full z-30 top-[95%] ${isVisible ? '' : 'invisible'}`}>
      <a
        href="#up"
        onClick={scrollToTop}
        className="absolute right-6 md:right-12 bottom-0 rounded-full border-[2px] border-black bg-beige text-black text-xl p-3 hover:scale-110 duration-100"
      >
        <IoIosArrowUp />
      </a>
    </div>
  );
};

export default ButtonUp;
