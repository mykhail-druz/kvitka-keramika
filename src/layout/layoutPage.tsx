import { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

type LayoutPageProps = {
  children: ReactNode;
  darkOrLight?: "light" | "dark";
  footerRequiered?: boolean;
};

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutPage;
