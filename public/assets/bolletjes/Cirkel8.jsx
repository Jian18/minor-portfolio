import * as React from 'react';

function Cirkel8(props) {
  return (
    <svg width={89} height={89} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={44.5} cy={44.5} r={44.5} fill="url(#prefix__paint0_linear_23_17)" />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_23_17"
          x1={44.5}
          y1={0}
          x2={44.5}
          y2={89}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8EE539" />
          <stop offset={1} stopColor="#18C0ED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Cirkel8;
