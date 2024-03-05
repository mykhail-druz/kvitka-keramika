import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      id="about"
      className="w-full py-12 md:py-32"
    >
      <div className="flex flex-col-reverse md:flex-row-reverse w-full md:w-[90%] 2xl:w-2/3 md:justify-between mx-auto">
        <div className="flex-col space-y-8 w-[90%] mx-auto md:w-[50%] pl-0 md:pl-8">
          <motion.h2
            custom={2}
            variants={itemVariants}
            className="font-bold text-4xl text-brown pb-4"
          >
            Про нас
          </motion.h2>
          <motion.p
            custom={3}
            variants={itemVariants}
            className="text-xl text-clay"
          >
            Ласкаво просимо до{" "}
            <span className="font-bold">
              Керамічної студії &quot;Квітка&quot;
            </span>{" "}
            — вашого особливого місця у серці міста, де мистецтво зустрічається
            з творчістю, а глина перетворюється на шедеври. Заснована з
            пристрастю до кераміки та бажанням поділитися цією любов&apos;ю з
            іншими, &quot;Квітка&quot; є домом для усіх, хто прагне відкрити в
            собі гончара чи скульптора.
          </motion.p>
          <motion.p
            custom={4}
            variants={itemVariants}
            className="text-xl text-clay"
          >
            Наша місія полягає в тому, щоб надихати та навчати людей усіх
            вікових категорій —{" "}
            <span className="font-bold">від малюків до дорослих</span> —
            мистецтву гончарства, ліплення з глини та створення скульптур. Ми
            віримо, що мистецтво є невід&apos;ємною частиною особистісного
            розвитку та способом виразити свої емоції та ідеї в творчий спосіб.
          </motion.p>
          <motion.p
            custom={5}
            variants={itemVariants}
            className="text-xl text-clay"
          >
            Наші послуги включають{" "}
            <span className="font-bold">майстер-класи та курси</span>, які
            покривають різні аспекти гончарства, від основ до більш складних
            технік. Наші професійні майстри мають багаторічний досвід та глибокі
            знання, якими вони готові поділитися з кожним учнем. Вони ведуть вас
            через всі етапи творчого процесу — від вибору глини до остаточного
            випалу виробу, забезпечуючи індивідуальний підхід та підтримку.
          </motion.p>
          <motion.p
            custom={6}
            variants={itemVariants}
            className="text-xl text-clay"
          >
            Наше розташування <span className="font-bold">у центрі Києва</span>{" "}
            робить нас легкодоступними та зручними для відвідування. Наша студія
            — це не просто майстерня, але й простір для спілкування, де можна
            знайти однодумців, поділитися досвідом та натхненням.
          </motion.p>
          <motion.div custom={7} variants={itemVariants}>
            <Link
              className="text-clay text-xl font-bold hover:text-white hover:bg-clay duration-300 border-clay border-2 py-2 px-4 rounded-full mt-8"
              href="#contact"
            >
              Записатися
            </Link>
          </motion.div>
        </div>
        <motion.div
          custom={1}
          variants={itemVariants}
          className="hidden md:block w-[50%]"
        >
          <img
            className=""
            src="/about/about_1.jpg"
            alt="About us"
            width={800}
            height={400}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
