import React from 'react';
import style from './ProjectOverzicht.module.css';
import { ReadMore } from '../Buttons/Component';

export function ProjectOverzicht() {
  return (
    <div className={style.container}>
      <h3 className={style.projectTitel}>
        {' '}
        {/* Hier komt dan name prop + leerdoelen? */}Diam's Leerdoelen
      </h3>
      <div className={style.glass}>
        <h6 className={style.projectTitel}>Project 1</h6>
        <div className={style.glassButton}>
          <ReadMore buttonText="Lees meer" />
        </div>
      </div>
      <div className={style.glass}>
        <h6 className={style.projectTitel}>Project 2</h6>
        <div className={style.glassButton}>
          <ReadMore buttonText="Lees meer" />
        </div>
      </div>
      <div className={style.glass}>
        <h6 className={style.projectTitel}>Project 3</h6>
        <div className={style.glassButton}>
          <ReadMore buttonText="Lees meer" />
        </div>
      </div>
    </div>
  );
}
