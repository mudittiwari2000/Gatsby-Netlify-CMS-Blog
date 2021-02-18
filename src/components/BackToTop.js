import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ChevronUpIcon = () => <FontAwesomeIcon icon={faChevronUp} />;

const BackToTop = ({ isHidden, ...props }) => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      className={`button is-primary rounded btn-back-to-top ${isHidden}`}
      onClick={() => handleClick()}
    >
      <span className="icon">
        <ChevronUpIcon />
      </span>
    </button>
  );
};

export default BackToTop;
