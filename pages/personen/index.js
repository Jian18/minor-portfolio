import React from 'react';
import Buttons from '../../components/Buttons/Component';
import style from './PersonPage.module.css';

function PersonPage() {
  return (
    <div>
      <div style={{ color: 'red' }}>
        <p>Hallo dit is echt gekloot</p>
        <Buttons buttonText="Vorige" />
        <Buttons buttonText="Volgende" />
      </div>
      <div>Image</div>
      <div>Naam {/* Hier komt naam props  */}</div>

      <div>
        <h6>Front-end Developer</h6>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
        <Buttons buttonText="Lees meer" />
      </div>
    </div>
  );
}

export default PersonPage;
