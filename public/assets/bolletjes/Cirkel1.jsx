import * as React from 'react';

function Cirkel1(props) {
  return (
    <svg width={114} height={114} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx={56.99}
        cy={56.99}
        r={56.99}
        fill="url(#prefix__paint0_linear_56_31)"
        fillOpacity={0.8}
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_56_31"
          x1={56.99}
          y1={0}
          x2={56.99}
          y2={113.98}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8EE539" />
          <stop offset={1} stopColor="#18C0ED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Cirkel1;
