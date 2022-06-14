import React from 'react';
import style from './Buttons.module.css';

// import icons
import { FiArrowLeftCircle } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';
import { FiAlignRight } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';

export function NextButton({ buttonText }) {
  return (
    <div>
      <button className={style.NextButton}>
        {buttonText}
        <FiArrowRightCircle />
      </button>
    </div>
  );
}

export function PreviousButton({ buttonText }) {
  return (
    <div>
      <button className={style.PreviousButton}>
        <FiArrowLeftCircle />
        {buttonText}
      </button>
    </div>
  );
}

export function ReadMore({ buttonText }) {
  return (
    <div>
      <button className={style.ReadMoreButton}>{buttonText}</button>
    </div>
  );
}
