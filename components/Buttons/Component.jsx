import React from 'react';
import style from './Buttons.module.css';

function Buttons({ buttonText }) {
  return (
    <div>
      <button className={style.button}>{buttonText}</button>
    </div>
  );
}

export default Buttons;
