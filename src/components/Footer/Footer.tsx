import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type FooterProps = {};

const Footer = ({}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      id="footer"
      className="w-full flex flex-col items-center justify-center bg-white"
    >
      <hr className="w-full" />
      <motion.div
        custom={1}
        variants={itemVariants}
        className="flex-col md:flex-row flex w-[90%] md:w-[80%] items-start md:items-center justify-between mt-2"
      >
        <Link href="/">
          <img src="/logo.png" width={150} height={150} alt="Logo" />
        </Link>
        <div className="flex-col md:flex-row flex space-x-0 space-y-8 md:space-y-0 md:space-x-16 mr-0 md:mr-24 mb-12 md:mb-0 mt-4 md:mt-0">
          <motion.div
            custom={2}
            variants={itemVariants}
            className="flex flex-col space-y-2"
          >
            <p className="font-bold text-3xl text-clay">Телефон</p>
            <a
              href="tel:+380979266928"
              className="font-medium underline underline-offset-8"
            >
              +380 97 926 69 28
            </a>
          </motion.div>
          <motion.div
            custom={3}
            variants={itemVariants}
            className="flex flex-col space-y-2"
          >
            <p className="font-bold text-3xl text-clay">Email</p>
            <a
              href="mailto:keramika.kvitka@gmail.com"
              className="font-medium underline underline-offset-8"
            >
              keramika.kvitka@gmail.com
            </a>
          </motion.div>
          <motion.div
            custom={4}
            variants={itemVariants}
            className="flex flex-col space-y-2"
          >
            {" "}
            <p className="font-bold text-3xl text-clay">Адреса</p>
            <p className="font-medium underline underline-offset-8">
              вулиця Липська, 19/7, Київ
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
