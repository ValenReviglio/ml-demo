import React from "react";

const SvgWarning = props => (
  <svg width={16} height={14} viewBox="0 0 16 14" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#F23D4F"
        d="M9.891 1.871l4.787 8.27a2 2 0 01-1.73 3.002H3.372a2 2 0 01-1.73-3.002l4.786-8.27a2 2 0 013.462 0z"
      />
      <path
        fill="#F23D4F"
        d="M7.647 8.96l-.214-4.413h1.444L8.674 8.96H7.647zm-.27 1.636a.79.79 0 01.778-.79.8.8 0 01.79.79.797.797 0 01-.79.779.788.788 0 01-.779-.779z"
      />
    </g>
  </svg>
);

export default SvgWarning;
