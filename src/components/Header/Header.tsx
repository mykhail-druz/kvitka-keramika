import Image from "next/image";
import Link from "next/link";

type HeaderProps = {};

const Header = ({}) => {
  return <header className="bg-beige w-full flex">
    <div className="flex w-[80%] mx-auto justify-between">
    <Image src="/logo.png" width={125} height={125} alt="Logo"/>
    <nav className="flex items-center justify-center space-x-8">
      <Link className="text-brown text-xl font-bold hover:text-white" href="#lessons">Майстер-класи</Link>
      <Link className="text-brown text-xl font-bold hover:text-white" href="#lessons">Курси</Link>
      <Link className="text-brown text-xl font-bold hover:text-white" href="#about">Про нас</Link>
      <Link className="text-brown text-xl font-bold hover:text-white" href="#footer">Контакти</Link>
      <Link className="text-white text-xl font-bold hover:bg-brown bg-clay py-2 px-4 rounded-full" href="#footer">Запис</Link>
    </nav>
    </div>
  </header>;
};

export default Header;
