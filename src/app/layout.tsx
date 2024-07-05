import type { Metadata } from "next";
import "./ui/theme/globals.scss";
import "remixicon/fonts/remixicon.css";
import styles from "./layout.module.scss";
import { openSans } from "./ui/theme/fonts";
import Image from "next/image";
import Header from "./ui/components/Header/Header";
import Footer from "./ui/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Untalinfo - website",
  description: "En esta pagina podras conocer mas sobre quien es untalinfo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased ${styles.container_general_layout}`}
      >
        <picture className={styles.picture_bg}>
          <source
            media="(min-width: 1024px)"
            srcSet={"/assets/bg-curvy-desktop.svg"}
          />
          <source
            media="(min-width: 768px)"
            srcSet={"/assets/bg-curvy-mobile.svg"}
          />
          <Image
            src={"/assets/bg-curvy-mobile.svg"}
            alt="Background"
            width={100}
            height={24}
          />
        </picture>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
