import * as React from 'react';

function Cirkel5(props) {
  return (
    <svg width={68} height={68} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={33.99} cy={33.823} r={33.823} fill="url(#prefix__paint0_linear_23_14)" />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_23_14"
          x1={33.99}
          y1={0}
          x2={33.99}
          y2={67.647}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8EE539" />
          <stop offset={1} stopColor="#18C0ED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Cirkel5;
