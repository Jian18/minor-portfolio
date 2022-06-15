import React from 'react';
import { useRouter } from 'next/router';
import style from './Person.module.css';

// import componenten
import { PreviousButton, NextButton, ReadMore } from '../Buttons/Component';

export function Person({ person: { name, role, image, Projecten }, next, prev }) {
  return (
    <div className={style.container}>
      {/* <NextButton buttonText="Volgende" icon="FiArrowRightCircle " /> */}
      {/* <PreviousButton buttonText="Vorige" icon="FiArrowLeftCircle" /> */}

      {/* {image.map((image) => (
        <img key={name} src={urlFor(image && image[0])} width={250} height={250} />
      ))} */}

      <div className={style.nameBackground}>
        <h3 className={style.name}>{name}</h3>
      </div>

      <div className={style.glass}>
        <h6 className={style.role}>{role}</h6>
        {/* map over array van person */}
        <ul>
          {Projecten.map((project) => (
            <li key={project._key} className={style.projectList}>
              project titel
            </li>
          ))}
        </ul>
        <ReadMore buttonText="Lees meer" />
      </div>
    </div>
  );
}
