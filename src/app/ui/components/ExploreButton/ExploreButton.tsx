import React from 'react';
import './ExploreButton.scss';

const ExploreButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      className="heading-S explore-button-container"
      onClick={handleClick}
    >
      EXPLORE
    </button>
  );
};

export default ExploreButton;
