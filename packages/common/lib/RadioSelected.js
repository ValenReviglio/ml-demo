import React from "react";

const SvgRadioSelected = props => (
  <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={8} cy={8} r={7.25} stroke="#3483FA" strokeWidth={1.5} />
      <circle cx={8} cy={8} r={4} fill="#3483FA" />
    </g>
  </svg>
);

export default SvgRadioSelected;
