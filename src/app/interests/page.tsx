'use client'
import { SetStateAction, useState } from "react";
import Separator from "../ui/components/Separator/Separator";
import DestinationSelector from "./ui/components/DestinationSelector/InterestSelector";
import styles from "./InterestPage.module.scss"
import Image from "next/image";
import { INTEREST_LIST_DESCRIPTIONS } from "./lib/contants/interest";

export default function InterestsPage() {
  const [interestSelected, setInterestSelected] = useState("literatura");
  const interest = INTEREST_LIST_DESCRIPTIONS.find(
    (interest) => interest.name === interestSelected
  );

  const handleSelectDestination = (interstValue: SetStateAction<string>) => {
    setInterestSelected(interstValue);
  };

  return (
    <section
      className={`${styles.container_destination_page} ${styles.fade_in_top}`}
    >
      <div className={`${styles.container_destination_content}`}>
        <header className={`${styles.title_header}`}>
          <h5>SELECCIONA EL INTERES</h5>
        </header>
        <div className={`${styles.img_destination_container}`}>
          {interest && (
          <Image
            src={interest.image}
            alt={`Image of ${interest?.name}`}
            className={`${styles.img_picture}`}
            width={487}
            height={487}
          />)}
        </div>
        <main className={`${styles.container_main_section}`}>
          <DestinationSelector
            handleSelectDestination={handleSelectDestination}
            destinationSelected={interestSelected}
          />
          <h2 className={`${styles.destination_title}`}>{interest?.name}</h2>
          <p className={`${styles.destination_description}`}>
            {interest?.description}
          </p>
          <Separator />
          <div className={`${styles.contianer_statistics}`}>
            <div className={styles.statistic}>
              <p className="subheading-S">AVG.</p>
            </div>
            <div className={styles.statistic}>
              <p className="subheading-S">EST.</p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
