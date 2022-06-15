import React from 'react';
import style from './Person.module.css';

// import componenten
import { PreviousButton, NextButton, ReadMore } from '../Buttons/Component';

export function Person() {
  return (
    <div>
      <NextButton buttonText="Volgende" icon="FiArrowRightCircle " />
      <PreviousButton buttonText="Vorige" icon="FiArrowLeftCircle" />

      <div>Image</div>

      <div className={style.name}>Naam prop {/* Hier komt naam props  */}</div>

      <div className={style.glass}>
        <h6>Front-end Developer</h6>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
        <ReadMore buttonText="Lees meer" />
      </div>
    </div>
  );
}
