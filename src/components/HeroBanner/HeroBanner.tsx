import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      className="justify-center flex pt-12"
    >
      <div className="w-[90%] md:w-[90%] 2xl:w-2/3 flex flex-col-reverse md:flex-row justify-between space-x-0">
        <motion.div
          custom={8}
          variants={itemVariants}
          className="flex flex-col items-start space-y-12 p-12 bg-beige md:w-[50%]"
        >
          <motion.p
            custom={10}
            variants={itemVariants}
            className="font-bold text-4xl text-brown"
          >
            Керамічна студія &quot;Квітка&quot;
          </motion.p>
          <motion.p
            custom={11}
            variants={itemVariants}
            className="font-medium text-2xl text-clay"
          >
            Майстер-класи з гончарства, ліпки та скульптури
          </motion.p>
          <Link
            className="text-clay text-xl font-bold hover:text-beige hover:bg-clay duration-300 border-clay border-2 py-2 px-4 rounded-full "
            href="#master-class"
          >
            <motion.span custom={12} variants={itemVariants}>
              Майстер-класи
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          custom={9}
          variants={itemVariants}
          className="flex mt-8 md:mt-0 md:w-[50%]"
        >
          <img
            src="/contact_banner.webp"
            alt="Hero banner"
            width={800}
            height={400}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroBanner;
