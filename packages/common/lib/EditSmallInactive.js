import React from "react";

const SvgEditSmallInactive = props => (
  <svg width={17} height={17} viewBox="0 0 17 17" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#CCC"
        strokeWidth={1.5}
        d="M15.571 2.136a2 2 0 010 2.828L6.38 14.157 2.843 10.62l9.193-9.192a2 2 0 012.828 0l.707.708z"
      />
      <path
        fill="#CCC"
        fillRule="nonzero"
        d="M11.328 2.136l3.536 3.536-1.06 1.06-3.536-3.535z"
      />
      <path
        stroke="#CCC"
        strokeWidth={1.5}
        d="M2.534 10.727l-.752 4.49 4.495-.747"
      />
    </g>
  </svg>
);

export default SvgEditSmallInactive;
