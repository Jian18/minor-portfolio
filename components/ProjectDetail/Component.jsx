import React from 'react';
import style from './ProjectDetail.module.css';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../lib/client';

export function ProjectDetail({ project }) {
  return (
    <div className={style.container}>
      <div className={style.patroon} />
      <div className={style.textContainer}>
        <h1 className={style.projectTitel}>{project?.projectNaam}</h1>
        <img src={urlFor(project.projectImage).url()} className={style.image} />
      </div>
      <div className={style.textContainer}>
        <h3 className={style.titel}>Inleiding</h3>
        <PortableText value={project?.inleiding} />
      </div>
      <div className={style.patroon} />
      <div className={style.textContainer}>
        <h3 className={style.titel}>Situatie - Hoe ben je erop gekomen?</h3>
        <PortableText value={project?.situatie} />
      </div>
      <div className={style.textContainer}>
        <h3 className={style.titel}>Taak / Actie - Wat heb je gedaan?</h3>
        <PortableText value={project?.taakActie} />
      </div>
      <div className={style.textContainer}>
        <h3 className={style.titel}>Reflectie &#38; Resultaat</h3>
        <PortableText value={project?.reflectieResultaat} />
      </div>
      <div className={`${style.imageContainer} ${style.imageContainer}`}>
        <img src={urlFor(project?.projectImage2).url()} className={style.image} />
        <img src={urlFor(project?.projectImage3).url()} className={style.image} />
        <img src={urlFor(project?.projectImage4).url()} className={style.image} />
        <img src={urlFor(project?.projectImage5).url()} className={style.image} />
      </div>
      <div className={style.patroon} />
    </div>
  );
}
