import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Студія кераміки “Квітка” | Гончарство в Києві",
  description:
    "Відкрийте для себе гончарське мистецтво в Києві разом з студією кераміки “Квітка”, де ви можете навчитися гончарства, майстерності ліплення з глини та створення скульптур. Долучайтесь до наших курсів, майстер-класів та особливих програм для дітей та пар, щоб розкрити свій творчий потенціал у затишній атмосфері.",
  keywords:
    "КВІТКА, квітка, квітка кераміка, гончарство, гончарство курси, ліпка з глини курси, майстер-класи гончарство, скульптура курси, гончарство сертифікати, гончарство Київ, ліпка з глини Київ, скульптура Київ, гончарство для дітей, гончарство на двох",
  robots: "follow, index",
  openGraph: {
    title: "Студія кераміки “Квітка” | Гончарство в Києві",
    description:
      "Відкрийте для себе гончарське мистецтво в Києві разом з студією кераміки “Квітка”, де ви можете навчитися гончарства, майстерності ліплення з глини та створення скульптур. Долучайтесь до наших курсів, майстер-класів та особливих програм для дітей та пар, щоб розкрити свій творчий потенціал у затишній атмосфері.",
    images: [{ url: "https://kvitka-keramika.kyiv.ua/logo.png" }],
    url: "https://kvitka-keramika.kyiv.ua",
    siteName: "Студія кераміки “Квітка” | Гончарство в Києві",
    locale: "uk",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </head>
      <body className={overpass.className}>
        <div className="blur-background">{children}</div>
      </body>
    </html>
  );
}
