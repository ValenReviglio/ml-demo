import React from "react";

const SvgSorterSymbol = props => (
  <svg width={24} height={25} viewBox="0 0 24 25" {...props}>
    <g fill="none" stroke="#333" strokeWidth={1.5}>
      <g transform="translate(0 13)">
        <path
          d="M22.771 5.62l-3-3m3 3.022l-3 3M14.5 5.635h7.77"
          strokeLinecap="round"
        />
        <rect width={9.5} height={9.5} x={0.75} y={1.381} rx={2} />
      </g>
      <g transform="matrix(-1 0 0 1 24 -.007)">
        <path
          d="M22.768 5.62l-3-3m3 3.022l-3 3M14.5 5.635h7.768"
          strokeLinecap="round"
        />
        <rect width={9.5} height={9.5} x={0.75} y={1.381} rx={2} />
      </g>
    </g>
  </svg>
);

export default SvgSorterSymbol;
