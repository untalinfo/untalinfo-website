import React from 'react';
import { INTEREST_LIST } from '../../../lib/contants/interest'
import styles from "./InterestSelector.module.scss";

type Props = {
  handleSelectDestination: (value: string) => void;
  destinationSelected: string;
};

const InterestSelector: React.FC<Props> = ({
  handleSelectDestination,
  destinationSelected,
}) => {
  return (
    <div className={`${styles.container_destination_selector}`}>
      {INTEREST_LIST.map((item, index: number) => {
        return (
          <div
            key={index}
            className={`${styles.item_destination} ${
              item.value === destinationSelected && styles.selected
            }`}
            onClick={() => handleSelectDestination(item.value)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default InterestSelector;
