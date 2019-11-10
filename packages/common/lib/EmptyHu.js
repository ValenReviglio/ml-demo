import React from "react";

const SvgEmptyHu = props => (
  <svg viewBox="0 0 126 118" {...props}>
    <g transform="translate(1 1)" fillRule="nonzero" fill="none">
      <rect
        x={4}
        y={5}
        width={121}
        height={112}
        rx={4}
        fill="#F5F5F5"
        style={{
          mixBlendMode: "multiply"
        }}
      />
      <path
        d="M4 0h113a4 4 0 014 4v104a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z"
        fill="#F5F5F5"
        stroke="#000"
        strokeDasharray="426,10"
        strokeLinecap="round"
        strokeOpacity={0.16}
        strokeWidth={2}
      />
      <rect x={6} y={12} width={109} height={27} rx={4} fill="#D8D8D8" />
      <rect x={8} y={72} width={24} height={27} rx={4} fill="#D8D8D8" />
      <rect x={37} y={72} width={76} height={27} rx={4} fill="#D8D8D8" />
      <rect x={7} y={51} width={106} height={9} rx={2} fill="#D8D8D8" />
    </g>
  </svg>
);

export default SvgEmptyHu;
