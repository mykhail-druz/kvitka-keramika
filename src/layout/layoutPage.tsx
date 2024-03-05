import { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ButtonUp from "@/components/ButtonUp/ButtonUp";

type LayoutPageProps = {
  children: ReactNode;
  darkOrLight?: "light" | "dark";
  footerRequiered?: boolean;
};

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Header />
      <ButtonUp />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutPage;
