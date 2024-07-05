import { SOCIAL_MEDIA_LIST } from "@/app/lib/constants/app";
import Link from "next/link";
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer_layout_container}>
      <small>Creado con ❤️ por @untalinfo </small>
      <section className={styles.follow}>
        <small>Follow me</small>
        <div className={styles.social_medias_container}>
          {SOCIAL_MEDIA_LIST.map((item, key) => {
            return (
              <Link href={item.path} target="_blank" key={key} className={styles.item}>
                <i className={item.icon}></i>
              </Link>
            );
          })}
        </div>
      </section>
    </footer>
  );
}