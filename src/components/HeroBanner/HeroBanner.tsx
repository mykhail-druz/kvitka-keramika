import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="justify-center flex pt-12">
      <div className="w-[90%] md:w-[90%] 2xl:w-2/3 flex flex-col-reverse md:flex-row justify-between space-x-0">
        <div className="flex flex-col items-start space-y-12 p-12 bg-beige md:w-[50%]">
          <p className="font-bold text-4xl text-brown">
            Керамічна студія &quot;Квітка&quot;
          </p>
          <p className="font-medium text-2xl text-clay">
            Майстер-класи з гончарства, ліпки та скульптури
          </p>
          <Link
            className="text-clay text-xl font-bold hover:text-beige hover:bg-clay duration-300 border-clay border-2 py-2 px-4 rounded-full "
            href="#contact"
          >
            Про нас
          </Link>
        </div>
        <div className="flex mt-8 md:mt-0 md:w-[50%]">
          <Image
            src="/contact_banner.jpg"
            alt="Hero banner"
            width={800}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
