import React, { useState } from 'react';
import style from './Navigation.module.css';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo } from '../../public/assets/Logo';
import { motion } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const animate = {
    hidden: {
      opaciity: 0,
      x: 1000,
    },
    show: {
      opaciity: 1,
      x: 0,
    },
  };

  return (
    <div>
      <Link href="/personen/jian-kootker">
        <Logo className={style.logo} />
      </Link>
      <button className={style.button} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX className={style.icon} /> : <FiMenu className={style.icon} />}
      </button>
      {isOpen && (
        <motion.nav
          initial="hidden"
          exit={{ opacity: 0, x: -1000 }}
          animate="show"
          variants={animate}
          className={style.nav}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ul>
            <li className={style.li}>
              <Link href="/projectOverzicht/diam-kanbier">
                <a className={style.name}>
                  Diam <br /> Kanbier
                </a>
              </Link>
            </li>
            <li className={style.li}>
              <Link href="/projectOverzicht/raquel-ortega">
                <a className={style.name}>
                  Raquel <br />
                  Ortega{' '}
                </a>
              </Link>
            </li>
            <li className={style.li}>
              <Link href="/projectOverzicht/cidalia-madeira">
                <a className={style.name}>
                  Cidalia <br /> Madeira
                </a>
              </Link>
            </li>
            <li className={style.li}>
              <Link href="/projectOverzicht/jian-kootker">
                <a className={style.name}>
                  Jian <br /> Kootker
                </a>
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </div>
  );
}
