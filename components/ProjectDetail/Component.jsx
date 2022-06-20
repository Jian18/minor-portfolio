import React from 'react';
import style from './ProjectDetail.module.css';

export function ProjectDetail({ project }) {
  return (
    <div className={style.container}>
      <h3 className={style.projectTitel}>{project.projectNaam}</h3>
      <div className={style.textContainer}>
        <h3 className={style.titel}>Inleiding</h3>
      </div>
      <div className={style.textContainer}>
        <h3 className={style.titel}>Situatie - Hoe ben je erop gekomen?</h3>
      </div>
      <div className={style.textContainer}>
        <h3 className={style.titel}>Taak / Actie - Wat heb je gedaan?</h3>
      </div>
      <div className={style.textContainer}>
        <h3 className={style.titel}>Reflectie &#38; Resultaat</h3>
      </div>
    </div>
  );
}
