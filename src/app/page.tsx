"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { Suspense } from "react";
import ExploreButton from "./ui/components/ExploreButton/ExploreButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleExplore = () => {
    router.push("/about");
  }
  return (
    <section className={`${styles.main} ${styles.fade_in_top}`}>
      <Suspense fallback={<div>Cargando...</div>}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/assets/untalinfo.png"
            alt="person foto"
            width={381}
            height={487}
            priority
            data-atropos-offset="0"
          />
        </div>
      </Suspense>
      <div className={styles.container_text}>
        <h2>Oscar Info</h2>
        <h4>Software Developer</h4>
        <div className={styles.button_container}>
          <ExploreButton handleClick={handleExplore} />
        </div>
      </div>
    </section>
  );
}
