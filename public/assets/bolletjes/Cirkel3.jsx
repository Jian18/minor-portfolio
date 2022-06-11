import * as React from 'react';

function Cirkel3(props) {
  return (
    <svg width={130} height={130} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx={64.683}
        cy={65.19}
        r={64.499}
        transform="rotate(30.669 64.683 65.19)"
        fill="url(#prefix__paint0_linear_23_8)"
        fillOpacity={0.5}
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_23_8"
          x1={64.683}
          y1={0.691}
          x2={64.683}
          y2={129.688}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18C0ED" stopOpacity={0} />
          <stop offset={1} stopColor="#18C0ED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Cirkel3;
