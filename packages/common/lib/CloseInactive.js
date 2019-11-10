import React from "react";

const SvgCloseInactive = props => (
  <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <path
      fill="none"
      stroke="#CCC"
      strokeLinecap="square"
      strokeWidth={2}
      d="M14 2L2 14m12 0L2 2"
    />
  </svg>
);

export default SvgCloseInactive;
