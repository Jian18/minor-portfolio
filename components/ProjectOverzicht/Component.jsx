import React from 'react';
import style from './ProjectOverzicht.module.css';
import { ReadMore } from '../Buttons/Component';
import { urlFor } from '../../lib/client';

export function ProjectOverzicht({ project: { Projecten, name } }) {
  return (
    <>
      <h3 className={style.projectTitel}>{`${name}'s`} Leerdoelen</h3>
      {Projecten.map((project) => (
        <div className={style.container} key={project.projectNaam}>
          <div className={style.glass}>
            <h6 className={style.projectTitel}>{project.projectNaam}</h6>
            <p>{project.description}</p>
            {project.projectImage && (
              <img
                alt={project.projectNaam}
                src={urlFor(project.projectImage).url()}
                className={style.image}
              />
            )}
            <div className={style.glassButton}>
              <ReadMore buttonText="Lees meer" buttonLink={''} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
