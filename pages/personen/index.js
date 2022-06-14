import React from 'react';
import style from './PersonPage.module.css';

// import componenten
import { PreviousButton, NextButton, ReadMore } from '../../components/Buttons/Component';

function PersonPage() {
  return (
    <div>
      <NextButton buttonText="Volgende" />
      <PreviousButton buttonText="Vorige" />

      <div>Image</div>
      <div className={style.name}>Naam {/* Hier komt naam props  */}</div>

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

export default PersonPage;
