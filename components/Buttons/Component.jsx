import React from 'react';
import style from './Buttons.module.css';

// import icons
import { FiArrowLeftCircle } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';
import { FiAlignRight } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';

export function NextButton({ buttonText }) {
  return (
    <button className={style.NextButton}>
      {buttonText}
      <FiArrowRightCircle className={style.arrowRight} />
    </button>
  );
}

export function PreviousButton({ buttonText }) {
  return (
    <button className={style.PreviousButton}>
      <FiArrowLeftCircle className={style.arrowLeft} />
      {buttonText}
    </button>
  );
}

export function ReadMore({ buttonText }) {
  return <button className={style.ReadMoreButton}>{buttonText}</button>;
}
