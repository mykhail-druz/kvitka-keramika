import Image from "next/image";
import Link from "next/link";

type FooterProps = {};

const Footer = ({}) => {
  return (
    <footer
      id="footer"
      className="w-full flex flex-col items-center justify-center bg-white"
    >
      <hr className="w-full" />
      <div className="flex-col md:flex-row flex w-[90%] md:w-[80%] items-start md:items-center justify-between mt-2">
        <Link href="/">
          <Image src="/logo.png" width={150} height={150} alt="Logo" />
        </Link>
        <div className="flex-col md:flex-row flex space-x-0 space-y-8 md:space-y-0 md:space-x-16 mr-0 md:mr-24 mb-12 md:mb-0 mt-4 md:mt-0">
          <div className="flex flex-col space-y-2">
            <p className="font-bold text-3xl text-clay">Телефон</p>
            <a href="tel:+380979266928" className="font-medium underline underline-offset-8">
              +380 97 926 69 28
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold text-3xl text-clay">Email</p>
            <a href="mailto:keramika.kvitka@gmail.com" className="font-medium underline underline-offset-8">
              keramika.kvitka@gmail.com
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            {" "}
            <p className="font-bold text-3xl text-clay">Адреса</p>
            <p className="font-medium underline underline-offset-8">вулиця Липська, 19/7, Київ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
