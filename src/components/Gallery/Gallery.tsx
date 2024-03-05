"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = ({}) => {
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className="flex flex-col items-center justify-center mb-24"
    >
      <div className="hidden md:flex flex-col items-center justify-center">
        <h1 className="mt-0 md:mt-16 mb-8 font-bold text-4xl text-clay">
          Галерея
        </h1>
        <div className="grid md:grid-flow-row grid-cols-1 md:grid-cols-3 grid-rows-4 gap-8">
          {[1, 3, 2, 4, 6, 5, 11, 9, 8, 10, 7, 12].map((index) => (
            <motion.div key={index}>
              <motion.div custom={index * 1} variants={itemVariants}>
                <img
                  src={`/gallery/gallery_${index}.webp`}
                  alt={`gallery photo ${index}`}
                  style={{ width: "350px", height: "500px" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex md:hidden flex-col items-center justify-center">
        <h1 className="mt-16 mb-6 font-bold text-4xl text-clay">Галерея</h1>
        <Marquee
          gradient={false} // Установите значение true, если нужен эффект градиента
          speed={250} // Настройте скорость по необходимости
        >
          {[1, 11, 3, 12, 2, 7, 4, 10, 6, 8, 5, 9].map((index) => (
            <div key={index} style={{ margin: "0 8px" }}>
              <img
                src={`/gallery/gallery_${index}.webp`}
                alt={`gallery photo ${index}`}
                style={{ width: "325px", height: "450px" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
};

export default Gallery;
