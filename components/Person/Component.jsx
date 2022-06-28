import React from 'react';
import { useRouter } from 'next/router';
import style from './Person.module.css';
import { urlFor } from '../../lib/client';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

// import componenten
import { PreviousButton, NextButton, ReadMore } from '../Buttons/Component';

export function Person({ person: { name, role, image, Projecten }, next, prev }) {
  const router = useRouter();
  const { slug } = router.query;

  const content = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.9,
      },
    },
  };
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        variants={content}
        key={slug}
        className={style.container}
      >
        <PreviousButton buttonText="Vorige" icon="FiArrowLeftCircle" buttonLink={prev} />
        <motion.div variants={content} className={style.childContainer}>
          <div className={style.nameContainer}>
            <picture>
              <source srcSet={urlFor(image).url()} type="image" />
              <img alt={image.name} src={urlFor(image).url()} className={style.image} />
            </picture>
            <div className={style.nameBackground}>
              <h3 className={style.name}>{name}</h3>
            </div>
          </div>
          <div exit={{ opacity: 0 }} className={style.glass}>
            <div className={style.glassText}>
              <h6 className={style.role}>{role}</h6>
              <ul>
                {Projecten.map((project) => (
                  <li key={project._id} className={style.projectList}>
                    <span className={style.checkIcon}>
                      <FiCheck />
                    </span>
                    {project.projectNaam}
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.glassButton}>
              <ReadMore buttonText="Lees meer" buttonLink={`/projectOverzicht/${slug}`} />
            </div>
          </div>
        </motion.div>

        <NextButton buttonText="Volgende" icon="FiArrowRightCircle" buttonLink={next} />
      </motion.div>
      <div className={`patroon ${style.patroon}`} />
    </>
  );
}
