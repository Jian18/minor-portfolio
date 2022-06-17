import React from 'react';
import { useRouter } from 'next/router';
import style from './Person.module.css';
import { urlFor } from '../../lib/client';
import Link from 'next/link';
// import componenten
import { PreviousButton, NextButton, ReadMore } from '../Buttons/Component';

export function Person({ person: { name, role, image, Projecten }, next, prev }) {
  return (
    <>
      <div className={style.container}>
        <PreviousButton buttonText="Vorige" icon="FiArrowLeftCircle" />

        {/* <Image alt={image.title} src={`${image._ref}`} layout="fill" />
        {console.log(image, 'image')} */}
        <div className={style.nameContainer}>
          <img alt={image.name} src={urlFor(image).url()} className={style.image} />
          <div className={style.nameBackground}>
            <h3 className={style.name}>{name}</h3>
          </div>
        </div>
        <div className={style.glass}>
          <div className={style.glassText}>
            <h6 className={style.role}>{role}</h6>
            <ul>
              {Projecten.map((project) => (
                <li key={project.name} className={style.projectList}>
                  {project.projectNaam}
                </li>
              ))}
            </ul>
          </div>
          <div className={style.glassButton}>
            <Link href={'/projecten'}>
              <a>Lees meer</a>
            </Link>
            <ReadMore buttonText="Lees meer" />
          </div>
        </div>
        <NextButton buttonText="Volgende" icon="FiArrowRightCircle " />
      </div>
    </>
  );
}
