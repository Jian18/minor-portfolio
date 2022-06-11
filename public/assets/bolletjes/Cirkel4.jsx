import * as React from 'react';

function Cirkel4(props) {
  return (
    <svg width={142} height={142} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx={70.916}
        cy={70.603}
        r={70.427}
        transform="rotate(-94.66 70.916 70.603)"
        fill="url(#prefix__paint0_linear_23_12)"
        fillOpacity={0.6}
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_23_12"
          x1={70.916}
          y1={0.176}
          x2={70.916}
          y2={141.029}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18C0ED" stopOpacity={0.2} />
          <stop offset={1} stopColor="#18C0ED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Cirkel4;
