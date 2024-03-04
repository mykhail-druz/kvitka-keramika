"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = ({}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    typeService: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/contact", {
        ...formData,
      });

      if (response.status >= 200 && response.status < 300) {
        toast.success("Повідомлення відправлено!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          typeService: "",
        });
      } else {
        toast.error("Помилка відправлення!");
      }
    } catch (error) {
      toast.error("Помилка з'єднання!");
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
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
      id="contact"
      className="w-full flex justify-between mx-auto my-8"
    >
      <div className="w-[50%] relative hidden md:block">
        <Image
          className="mx-auto bg-cover"
          src="/contact_banner.jpg"
          alt="Contact us image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full md:w-[50%] bg-beige flex flex-col items-center py-16 space-y-8">
        <motion.h1
          custom={1}
          variants={itemVariants}
          className="text-clay font-bold text-3xl"
        >
          Записатися
        </motion.h1>
        <form
          onSubmit={handleSubmit}
          action="POST"
          className="w-[80%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto"
        >
          <div className="flex flex-col mx-auto space-y-8">
            <motion.input
              custom={2}
              variants={itemVariants}
              type="text"
              className="bg-white w-[90%] mx-auto px-4 py-3 rounded-full text-black outline-clay"
              placeholder="Ім'я..."
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <motion.input
              custom={3}
              variants={itemVariants}
              type="phone"
              className="bg-white w-[90%] mx-auto px-4 py-3 rounded-full text-black outline-clay"
              placeholder="Телефон..."
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <motion.input
              custom={4}
              variants={itemVariants}
              type="text"
              className="bg-white w-[90%] mx-auto px-4 py-3 rounded-full text-black outline-clay"
              placeholder="Email..."
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <motion.select
              custom={5}
              variants={itemVariants}
              id="typeService"
              name="typeService"
              className="bg-white w-[90%] mx-auto px-2 py-3 rounded-full text-black outline-clay appearance-none"
              value={formData.typeService}
              onChange={handleChange}
              required
            >
              <option className="text-black">Оберіть послугу...</option>
              <optgroup className="text-black" label="Гончарство">
                Гончарство
              </optgroup>
              <option className="text-black" value="Гончарство">
                Заняття з гончарства
              </option>
              <option className="text-black" value="Парне заняття з гончарства">
                Парне заняття з гончарства
              </option>

              <optgroup className="text-black" label="Ліпка">
                Ліпка
              </optgroup>
              <option className="text-black" value="Ліпка з глини">
                Ліпка з глини
              </option>
              <option className="text-black" value="Парне заняття з ліпки ">
                Парне заняття з ліпки{" "}
              </option>

              <optgroup className="text-black" label="Скульптура">
                Скульптура
              </optgroup>
              <option className="text-black" value="Заняття зі скульптури">
                Заняття зі скульптури
              </option>
              <option
                className="text-black"
                value="Групове заняття зі скульптури"
              >
                Групове заняття зі скульптури
              </option>

              <optgroup className="text-black" label="Для групи">
                Для групи
              </optgroup>
              <option className="text-black" value="Групове заняття">
                Групове заняття
              </option>
            </motion.select>
            <motion.textarea
              custom={6}
              variants={itemVariants}
              className="w-[90%] mx-auto bg-white px-4 py-3 rounded-3xl text-black outline-clay resize-none"
              placeholder="Коментар..."
              id="message"
              name="message"
              cols={20}
              rows={7}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <motion.button
              custom={7}
              variants={itemVariants}
              type="submit"
              className="text-white text-lg font-bold hover:bg-white hover:text-brown bg-clay py-2 px-4 rounded-full duration-300 w-1/2 mx-auto"
            >
              <p>Наліслати</p>
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};
export default ContactForm;
