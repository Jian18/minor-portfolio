import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import style from '/styles/Home.module.css';

// components
import Buttons from '../components/Buttons/Component';
import Navigation from '../components/Navigation/Component';
import {
  Cirkel1,
  Cirkel2,
  Cirkel3,
  Cirkel4,
  Cirkel5,
  Cirkel6,
  Cirkel7,
  Cirkel8,
} from '../public/assets/bolletjes/cirkel';

export default function HomePage() {
  const cirkel1 = useRef();
  const cirkel2 = useRef();
  const cirkel3 = useRef();
  const cirkel4 = useRef();
  const cirkel5 = useRef();
  const cirkel6 = useRef();
  const cirkel7 = useRef();
  const cirkel8 = useRef();

  const cirkelRef = useRef();
  const q = gsap.utils.selector(cirkelRef);

  useEffect(() => {
    var tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.inOut' } });
    tl.to(q('.cirkel1'), { top: '20%', left: '41%' }, 'start')
      .to(q('.cirkel2'), { top: '53%', left: '66%' }, 'start')
      .to(q('.cirkel3'), { top: '25%', left: '65%' }, 'start')
      .to(q('.cirkel4'), { top: '23%', left: '37%' }, 'start')
      .to(q('.cirkel5'), { top: '16%', left: '49%' }, 'start')
      .to(q('.cirkel6'), { top: '66%', left: '66%' }, 'start')
      .to(q('.cirkel7'), { top: '52%', left: '75%' }, 'start')
      .to(q('.cirkel8'), { top: '25%', left: '69%' }, 'start');

    return () => {
      // unmount animatie;
    };
  }, [q]);

  return (
    <div className={style.containerCirkel}>
      <div className={style.containerChild} ref={cirkelRef}>
        <Cirkel1 className={`${style.cirkel1} cirkel1`} />
        <Cirkel2 className={`${style.cirkel2} cirkel2`} />
        <Cirkel3 className={`${style.cirkel3} cirkel3`} />
        <Cirkel4 className={`${style.cirkel4} cirkel4`} />
        <Cirkel5 className={`${style.cirkel5} cirkel5`} />
        <Cirkel6 className={`${style.cirkel6} cirkel6`} />
        <Cirkel7 className={`${style.cirkel7} cirkel7`} />
        <Cirkel8 className={`${style.cirkel8} cirkel8`} />
      </div>
    </div>
  );
}
