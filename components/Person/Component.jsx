import React from 'react';
import { useRouter } from 'next/router';
import style from './Person.module.css';
import { urlFor } from '../../lib/client';
// import componenten
import { PreviousButton, NextButton, ReadMore } from '../Buttons/Component';
import { Cirkels } from '../Cirkels/Component';

export function Person({ person: { name, role, image, Projecten }, next, prev }) {
  return (
    <>
      <div className={style.container}>
        <PreviousButton buttonText="Vorige" icon="FiArrowLeftCircle" />

        {/* <Image alt={image.title} src={`${image._ref}`} layout="fill" />
      {console.log(image, 'image')} */}
        <div className={style.nameContainer}>
          <img alt={urlFor(image)} src={urlFor(image)} className={style.image} />
          <div className={style.nameBackground}>
            <h3 className={style.name}>{name}</h3>
          </div>
        </div>
        <div className={style.glass}>
          <div className={style.glassText}>
            <h6 className={style.role}>{role}</h6>
            <ul>
              {Projecten.map((project) => (
                <li key={project._key} className={style.projectList}>
                  project titel
                </li>
              ))}
            </ul>
          </div>
          <div className={style.glassButton}>
            <ReadMore buttonText="Lees meer" />
          </div>
        </div>
        <NextButton buttonText="Volgende" icon="FiArrowRightCircle " />
      </div>
    </>
  );
}
