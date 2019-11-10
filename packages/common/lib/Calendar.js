import React from "react";

const SvgCalendar = props => (
  <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <g fill="none">
      <path
        fill="#D8D8D8"
        stroke="#979797"
        d="M3.5.5h1v2h-1zm8.492 0h1v2h-1z"
      />
      <rect
        width={12.5}
        height={11.972}
        x={1.75}
        y={2.371}
        stroke="#979797"
        strokeWidth={1.5}
        rx={1}
      />
      <path fill="#979797" d="M2.5 2.864h11v2.554h-11z" />
    </g>
  </svg>
);

export default SvgCalendar;
