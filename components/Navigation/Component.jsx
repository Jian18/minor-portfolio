import React, { useState } from 'react';
import style from './Navigation.module.css';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // if person == setPerson{ set className = {style.selectedName}}
  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX className={style.icon} /> : <FiMenu className={style.icon} />}
      </button>
      {isOpen && (
        <nav className={style.nav}>
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
        </nav>
      )}
    </div>
  );
}
