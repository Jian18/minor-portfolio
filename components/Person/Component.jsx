import React from 'react';
import { useRouter } from 'next/router';
import style from './Person.module.css';
import { urlFor } from '../../lib/client';

// import componenten
import { PreviousButton, NextButton, ReadMore } from '../Buttons/Component';

export function Person({ person: { name, role, image, Projecten }, next, prev }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(prev, 'prev', next, 'next');
  return (
    <>
      <div className={style.container}>
        <PreviousButton buttonText="Vorige" icon="FiArrowLeftCircle" buttonLink={prev} />

        {/* <Image alt={image.title} src={`${image._ref}`} layout="fill" />
        {console.log(image, 'image')} */}
        <div className={style.nameContainer}>
          <picture>
            <source srcSet={urlFor(image).url()} type="image" />
            <img alt={image.name} src={urlFor(image).url()} className={style.image} />
          </picture>
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
            <ReadMore buttonText="Lees meer" buttonLink={`/projectOverzicht/${slug}`} />
          </div>
        </div>
        <NextButton buttonText="Volgende" icon="FiArrowRightCircle" buttonLink={next} />
      </div>
    </>
  );
}
