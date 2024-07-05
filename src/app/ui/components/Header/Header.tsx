'use client'

import { MENU_ITEMS } from "@/app/lib/constants/app";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isOpeneMenuMobile, setisOpeneMenuMobile] = useState(false);
  const currentPath = usePathname();
  const handleToogleMenu = () => {
    setisOpeneMenuMobile(!isOpeneMenuMobile);
  };
  return (
    <header className={`${styles.header_layout_container}`}>
      <Link href={"/"}>
        <Image
          src="/assets/logo-text.png"
          alt="page logo"
          className="logo-icon"
          width={122}
          height={40}
        />
      </Link>
      <div onClick={handleToogleMenu} className={`${styles.hamburguer_menu}`}>
        <Image src="/assets/icon-hamburger.svg" alt="" width={20} height={20} />
      </div>
      {/* <MobileSideMenu
        isOpen={isOpeneMenuMobile}
        toggleMenu={handleToogleMenu}
        currentPath={currentPath}
      /> */}
      <nav className={styles.menu}>
        {MENU_ITEMS.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              className={`${styles.menu_link} nav-text ${
                item.path === currentPath && "current-path"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}