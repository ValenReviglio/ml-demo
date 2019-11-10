import React from "react";

const SvgPrinter = props => (
  <svg width={150} height={150} viewBox="0 0 150 150" {...props}>
    <defs>
      <path id="printer_svg__a" d="M0 0h72.069v20.861H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(19 20)">
      <g transform="translate(20.966 22.165)">
        <mask id="printer_svg__b" fill="#fff">
          <use xlinkHref="#printer_svg__a" />
        </mask>
        <path
          stroke="#333"
          strokeDasharray="204.1439120884788,449.1166136136962"
          strokeLinecap="round"
          strokeWidth={2.5}
          d="M1.31 7.823V6.746a5.443 5.443 0 015.44-5.442h55.947a5.44 5.44 0 015.44 5.437v21.72a5.44 5.44 0 01-5.44 5.438H6.751c-3.005 0-5.44-2.445-5.44-5.45V18.253"
          mask="url(#printer_svg__b)"
        />
      </g>
      <path
        stroke="#333"
        strokeWidth={2.5}
        d="M86.422 86.282h9.022a4.195 4.195 0 004.203-4.187v-34.76c0-2.309-1.882-4.186-4.203-4.186h-79.51a4.195 4.195 0 00-4.201 4.186v34.76a4.197 4.197 0 004.202 4.187h9.022V65.42h61.465v20.86z"
      />
      <path
        fill="#FFDB15"
        d="M95.655 60.152h-70.6a4.081 4.081 0 00-4.09 4.079v18l-2.513.041a2.667 2.667 0 01-2.728-2.674V49.832a2.725 2.725 0 012.728-2.718h74.475a2.73 2.73 0 012.728 2.717v10.321z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2.5}
        d="M24.897 65.367h61.586V99.16a2.717 2.717 0 01-2.726 2.715H27.622a2.72 2.72 0 01-2.725-2.715V65.367z"
      />
      <path
        d="M58.966 90.14H77.31m-18.344 5.215h10.482"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.568}
      />
      <ellipse cx={87.793} cy={52.329} fill="#333" rx={2.621} ry={2.608} />
      <ellipse cx={19.655} cy={51.025} fill="#333" rx={1.31} ry={1.304} />
      <ellipse cx={24.897} cy={51.025} fill="#333" rx={1.31} ry={1.304} />
      <ellipse cx={28.828} cy={51.025} fill="#333" rx={1.31} ry={1.304} />
      <path
        stroke="#D3D2D3"
        strokeLinecap="round"
        strokeWidth={2.62}
        d="M91.724 92.747h20.966"
        opacity={0.353}
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2.5}
        d="M20.966 65.367h69.448"
      />
      <path
        stroke="#D3D2D3"
        strokeLinecap="round"
        strokeWidth={2.62}
        d="M0 94.05h20.966"
        opacity={0.353}
      />
      <path
        d="M94.326 26.6l11.09-.028M86.82 19.093l.027-11.09m5.495 13.384l10.04-10.344"
        stroke="#DFDFDF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
      />
    </g>
  </svg>
);

export default SvgPrinter;
