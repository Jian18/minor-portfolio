import React from 'react';
import style from './ProjectOverzicht.module.css';
import { ReadMore } from '../Buttons/Component';
import { urlFor } from '../../lib/client';
import { PortableText } from '@portabletext/react';

export function ProjectOverzicht({ project: { Projecten, name } }) {
  return (
    <>
      <div className="patroon" />
      <div className={style.mainContainer}>
        <h3 className={`${style.projectTitel} ${style.nameTitel}`}>{`${name}'s`} Leerdoelen</h3>
        {Projecten.map((project) => (
          <div className={style.container} key={project.projectNaam}>
            <div className={style.glass}>
              <div className={style.glassLeft}>
                <h6 className={style.projectTitel}>{project.projectNaam}</h6>
                <PortableText value={project.inleiding} className={style.portableText} />
              </div>
              <div>
                {project.projectImage && (
                  <img
                    alt={project.projectNaam}
                    src={urlFor(project.projectImage).url()}
                    className={style.image}
                  />
                )}
                <div className={style.glassButton}>
                  <ReadMore
                    buttonText="Lees meer"
                    buttonLink={`/projectDetail/${project.slug.current}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="patroon" />
    </>
  );
}
