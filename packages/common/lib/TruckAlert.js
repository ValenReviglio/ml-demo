import React from "react";

const SvgTruckAlert = props => (
  <svg width={80} height={46} viewBox="0 0 80 46" {...props}>
    <defs>
      <path
        id="truckAlert_svg__a"
        d="M1.38.69h4.024L4.9 12.76H1.883L1.38.69zm2.012 14.083a2.012 2.012 0 110 4.024 2.012 2.012 0 010-4.024z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(1)">
      <rect
        width={40.355}
        height={9.558}
        x={0.6}
        y={0.914}
        fill="#EFEFEF"
        fillRule="nonzero"
        rx={2}
      />
      <rect
        width={64.194}
        height={5.689}
        x={0.6}
        y={33.08}
        fill="#EFEFEF"
        fillRule="nonzero"
        rx={2}
      />
      <path
        stroke="#BFBFBF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M55.792 23.977h-6.495a2 2 0 01-2-2v-5.434"
      />
      <path
        stroke="#BFBFBF"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M.6 14.72V3.038C.6 1.865 1.55.914 2.724.914H38.83c1.173 0 2.124.951 2.124 2.124v36.108H2.724A2.124 2.124 0 01.6 37.022V25.34m0-4.018v-.23"
      />
      <circle
        cx={11.75}
        cy={38.975}
        r={6.153}
        fill="#FFF"
        fillRule="nonzero"
        stroke="#BFBFBF"
        strokeWidth={1.5}
      />
      <path
        stroke="#BFBFBF"
        strokeWidth={1.5}
        d="M40.977 39.184H63.63c.69 0 1.25-.56 1.25-1.25V23.332L53.765 10.664a1.25 1.25 0 00-.94-.425H42.227c-.69 0-1.25.56-1.25 1.25v27.695z"
      />
      <circle
        cx={51.544}
        cy={38.975}
        r={6.153}
        fill="#FFF"
        fillRule="nonzero"
        stroke="#BFBFBF"
        strokeWidth={1.5}
      />
      <path
        stroke="#BFBFBF"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M35.994 20.561V5.693"
      />
      <g transform="translate(72.622 12.004)">
        <mask id="truckAlert_svg__b" fill="#fff">
          <use xlinkHref="#truckAlert_svg__a" />
        </mask>
        <path
          fill="#BFBFBF"
          d="M-8-4h22.298v27.235H-8z"
          mask="url(#truckAlert_svg__b)"
        />
      </g>
    </g>
  </svg>
);

export default SvgTruckAlert;
