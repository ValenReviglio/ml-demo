import React from "react";

const SvgClock = props => (
  <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <g fill="none">
      <path
        fill="#333"
        d="M8 14.857A6.857 6.857 0 108 1.143a6.857 6.857 0 000 13.714zM8 16A8 8 0 118 0a8 8 0 010 16z"
      />
      <path stroke="#333" d="M8 4v5m3.5 0H8" />
    </g>
  </svg>
);

export default SvgClock;
