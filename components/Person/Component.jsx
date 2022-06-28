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

  const slideIn = {
    initial: {
      opacity: 0,
      // translateX: '1000%',
      // translateZ: '0%',
    },
    animate: {
      opacity: 1,
      // translateX: '-20%',
      // translateZ: '-80%',
      transition: {
        duration: 0.9,
        type: 'spring',
      },
    },
  };
  // translate(-20%, -80%)
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        key={router.route}
        className={style.container}
      >
        <PreviousButton buttonText="Vorige" icon="FiArrowLeftCircle" buttonLink={prev} />
        <motion.div variants={stagger} className={style.childContainer}>
          <div className={style.nameContainer}>
            <picture>
              <source srcSet={urlFor(image).url()} type="image" />
              <img alt={image.name} src={urlFor(image).url()} className={style.image} />
            </picture>
            <div className={style.nameBackground}>
              <h3 className={style.name}>{name}</h3>
            </div>
          </div>
          <motion.div
            variants={slideIn}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            transition={{ type: 'spring' }}
            key={router.route}
            className={style.glass}
          >
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
          </motion.div>
        </motion.div>

        <NextButton buttonText="Volgende" icon="FiArrowRightCircle" buttonLink={next} />
        <div className={`patroon ${style.patroon}`} />
      </motion.div>
    </>
  );
}
