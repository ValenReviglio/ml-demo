import React from "react";

const SvgPaSmall = props => (
  <svg width={24} height={25} viewBox="0 0 24 25" {...props}>
    <g fill="none" transform="translate(0 -1)">
      <path
        fill="#333"
        d="M12.25 8.69l1.72-1.72a.75.75 0 011.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V1.73a.75.75 0 011.5 0v6.96z"
      />
      <rect
        width={22.5}
        height={8.5}
        x={0.75}
        y={16.75}
        stroke="#343434"
        strokeWidth={1.5}
        rx={1}
      />
      <path
        stroke="#343434"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M23 14l-1-4h-3M1 14l1-4h3"
      />
    </g>
  </svg>
);

export default SvgPaSmall;
