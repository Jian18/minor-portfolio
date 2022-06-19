import React from 'react';
import style from './Buttons.module.css';

// import icons
import { FiArrowLeftCircle } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';
import { FiAlignRight } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

export function NextButton({ buttonText, buttonLink }) {
  return (
    <Link href={buttonLink}>
      <button className={style.NextButton}>
        {buttonText}
        <FiArrowRightCircle className={style.arrowRight} />
      </button>
    </Link>
  );
}

export function PreviousButton({ buttonText, buttonLink }) {
  return (
    <Link href={buttonLink}>
      <button className={style.PreviousButton}>
        <FiArrowLeftCircle className={style.arrowLeft} />
        {buttonText}
      </button>
    </Link>
  );
}

export function ReadMore({ buttonText, buttonLink }) {
  return (
    <Link href={buttonLink}>
      <button className={style.ReadMoreButton}>{buttonText}</button>
    </Link>
  );
}
