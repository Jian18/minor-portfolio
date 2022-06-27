import React from 'react';
import style from './ProjectOverzicht.module.css';
import { ReadMore } from '../Buttons/Component';
import { urlFor } from '../../lib/client';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';

export function ProjectOverzicht({ project: { Projecten, name } }) {
  const variants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
  };
  return (
    <>
      <div className="patroon" />
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={variants}
        className={style.mainContainer}
      >
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={variants}
          className={`${style.projectTitel} ${style.nameTitel}`}
        >
          {`${name}'s`} Leerdoelen
        </motion.h3>
        {Projecten.map((project) => (
          <motion.div
            exit={{ opacity: 0 }}
            initial="hidden"
            animate="visible"
            variants={variants}
            className={style.container}
            key={project.projectNaam}
          >
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
          </motion.div>
        ))}
      </motion.div>
      <div className="patroon" />
    </>
  );
}
