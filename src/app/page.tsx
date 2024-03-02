import dynamic from "next/dynamic";
import LayoutPage from "@/layout/layoutPage";
import ContactForm from "@/components/ContactForm/ContactForm";
import { ToastContainer } from "react-toastify";
import Gallery from "@/components/Gallery/Gallery";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import React, { RefObject } from "react";
import AboutUs from "@/components/AboutUs/AboutUs";
import Courses from "@/components/Courses/Courses";

const DynamicIframe = dynamic(() =>
  import("react").then((React) => {
    return React.forwardRef<HTMLIFrameElement, React.IframeHTMLAttributes<HTMLIFrameElement>>(
      (props, ref) => <iframe ref={ref} {...props} />
    );
  }),
  { ssr: false }
);


export default function Home() {
  return (
    <LayoutPage>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <HeroBanner/>
      <AboutUs/>
      <Courses/>
      <Gallery />
      <ContactForm />
      <div className="w-full md:w-[90%] mx-auto items-center justify-center flex pb-8">
        <DynamicIframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d158.807285317758!2d30.533667174774862!3d50.44265474619411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfb8182796d3%3A0xc17504926b518308!2zItCa0LLRltGC0LrQsCIgLSDQutC10YDQsNC80ZbRh9C90LAg0YHRgtGD0LTRltGP!5e0!3m2!1sru!2sua!4v1707663122444!5m2!1sru!2sua"
          width="90%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </LayoutPage>
  );
}