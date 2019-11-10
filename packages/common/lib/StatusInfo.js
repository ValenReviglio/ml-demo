import React from "react";

const SvgStatusInfo = props => (
  <svg width={33} height={33} {...props}>
    <defs>
      <filter
        id="statusInfo_svg__b"
        width="123%"
        height="133.4%"
        x="-11.5%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={0.5}
          result="shadowSpreadOuter1"
        />
        <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
        />
        <feOffset dy={20} in="SourceAlpha" result="shadowOffsetOuter2" />
        <feGaussianBlur
          in="shadowOffsetOuter2"
          result="shadowBlurOuter2"
          stdDeviation={12.5}
        />
        <feColorMatrix
          in="shadowBlurOuter2"
          result="shadowMatrixOuter2"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="shadowMatrixOuter2" />
        </feMerge>
      </filter>
      <rect id="statusInfo_svg__a" width={431} height={296} rx={4} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#EDEDED" d="M-3332-209H345V900h-3677z" />
      <g transform="translate(-199 -63)">
        <mask id="statusInfo_svg__c" fill="#fff">
          <use xlinkHref="#statusInfo_svg__a" />
        </mask>
        <use
          fill="#000"
          filter="url(#statusInfo_svg__b)"
          xlinkHref="#statusInfo_svg__a"
        />
        <use fill="#FFF" xlinkHref="#statusInfo_svg__a" />
        <g
          stroke="#3483FA"
          strokeLinecap="square"
          strokeWidth={2}
          mask="url(#statusInfo_svg__c)"
        >
          <path d="M398 34l-12 12m12 0l-12-12" />
        </g>
      </g>
      <g fillRule="nonzero">
        <circle cx={16.5} cy={16.5} r={16.5} fill="#F4781A" />
        <path fill="#FFF" d="M14.5 8h4L18 19h-3z" />
        <circle
          cx={16.5}
          cy={23}
          r={2}
          fill="#FFF"
          transform="matrix(1 0 0 -1 0 46)"
        />
      </g>
    </g>
  </svg>
);

export default SvgStatusInfo;
