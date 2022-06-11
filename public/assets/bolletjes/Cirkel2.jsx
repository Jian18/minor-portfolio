import * as React from 'react';

function Cirkel2(props) {
  return (
    <svg width={132} height={132} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={65.793} cy={65.793} r={65.793} fill="url(#prefix__paint0_linear_56_38)" />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_56_38"
          x1={65.793}
          y1={0}
          x2={65.793}
          y2={131.587}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8EE539" />
          <stop offset={1} stopColor="#8EE539" stopOpacity={0.32} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Cirkel2;
