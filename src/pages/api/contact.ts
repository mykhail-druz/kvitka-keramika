import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  typeService: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      name,
      phone,
      email,
      typeService,
      message,
    } = //recaptchaToken
      req.body as ContactFormData;
    const formData: ContactFormData = {
      name,
      phone,
      email,
      typeService,
      message,
    };

    // Отправка электронной почты
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.PASS_NODEMAILER,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: `"${formData.name} " <${formData.email}>`,
        to: "keramika.kvitka@gmail.com",
        subject: "Нове повідомлення від відвідувача сайту",
        text: `Ім'я: ${formData.name}\nТелефон ${formData.phone}\nEmail: ${formData.email}\nПослуга: ${formData.typeService}\nКоментар: ${formData.message}`,
      });
      // console.log('Message sent: %s', info.messageId);
      res.status(200).end();
    } catch (error) {
      // console.log(error);
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
}
