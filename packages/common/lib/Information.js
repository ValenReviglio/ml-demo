import React from "react";

const SvgInformation = props => (
  <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle stroke="#3483FA" cx={8} cy={8} r={7.5} />
      <path
        d="M7.994 5.405a.704.704 0 01-.696-.696c0-.384.324-.684.696-.684.384 0 .696.3.696.684a.697.697 0 01-.696.696zm-.528 6.564V6.173h1.08v5.796h-1.08z"
        fill="#3483FA"
      />
    </g>
  </svg>
);

export default SvgInformation;
