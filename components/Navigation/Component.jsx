import React from 'react';
import style from './Navigation.module.css';
import Link from 'next/link';

function Navigation() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/Diam">
            <a>Diam</a>
          </Link>
        </li>
        <li>
          <Link href="/Raquel">
            <a>Raquel</a>
          </Link>
        </li>
        <li>
          <Link href="/Cidalia">
            <a>Cidalia</a>
          </Link>
        </li>
        <li>
          <Link href="/Jian">
            <a>Jian</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
