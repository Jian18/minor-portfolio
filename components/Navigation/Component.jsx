import React from 'react';
import style from './Navigation.module.css';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="#">
            <a>Diam</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Raquel</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Cidalia</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Jian</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
