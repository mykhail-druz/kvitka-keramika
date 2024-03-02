import React from "react";

const MobileNavCompopnent = () => {
  return (
    <div>
      <div className="bg-beige w-full h-full py-8">
        <ul className="h-full flex flex-col justify-center items-center gap-y-5 font-semibold">
          <li>
            <a
              className="hover:text-white duration-300 text-clay text-2xl"
              href=""
            >
              Майстер-класи
            </a>
          </li>
          <li>
            <a
              className="hover:text-white duration-300 text-clay text-2xl"
              href=""
            >
              Курси
            </a>
          </li>
          <li>
            <a
              className="hover:text-white duration-300 text-clay text-2xl"
              href="#about"
            >
              Про нас
            </a>
          </li>
          <li>
            <a
              className="hover:text-white duration-300 text-clay text-2xl"
              href="#contact"
            >
              Записатися
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavCompopnent;
