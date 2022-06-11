import * as React from 'react';

function Cirkel6(props) {
  return (
    <svg width={45} height={45} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={22.24} cy={22.24} r={22.24} fill="url(#prefix__paint0_linear_23_15)" />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_23_15"
          x1={22.24}
          y1={0}
          x2={22.24}
          y2={44.48}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8EE539" />
          <stop offset={1} stopColor="#18C0ED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Cirkel6;
