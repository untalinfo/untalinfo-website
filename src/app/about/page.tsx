import Image from 'next/image';
import styles from './AboutPage.module.scss'

export default function AboutPage() {
  return (
    <section className={`${styles.container_about_page} ${styles.fade_in_top}`}>
      <h3>Un poco como developer</h3>
      <div className={`${styles.main_section}`}>
        <p>
          Soy un desarrollador de software especializado como desarrollador web
          para startups. Me especializo en el desarrollo de front-end utilizando
          tecnologías como React, JavaScript, CSS, Git, GitHub y Ruby on Rails.
          He contribuido activamente a la creación de Aplicaciones de Página
          Única (SPA) y he mostrado un gran interés en mantenerme actualizado
          con las últimas tecnologías. Como miembro del equipo, soy una persona
          entusiasta y amigable; priorizo el bienestar de mis colegas y tengo
          una profunda pasión por las nuevas tecnologías y el diseño UX/UI.
        </p>
        <Image
          className={styles.img}
          src="/assets/about-me.png"
          alt="illustration"
          width={487}
          height={487}
          priority
          data-atropos-offset="0"
        />
      </div>
    </section>
  );
}