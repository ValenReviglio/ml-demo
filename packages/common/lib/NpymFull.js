import React from "react";

const SvgNpymFull = props => (
  <svg width={110} height={85} viewBox="0 0 110 85" {...props}>
    <defs>
      <filter
        id="npymFull_svg__a"
        width="103.2%"
        height="104.7%"
        x="-1.6%"
        y="-1.7%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={1}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
        />
      </filter>
      <filter
        id="npymFull_svg__d"
        width="118%"
        x="-9%"
        y="-5.9%"
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
      <rect id="npymFull_svg__c" width={540} height={486} rx={4} />
      <path
        id="npymFull_svg__b"
        d="M0 4.558A4 4 0 014.004.555h211.868a4.005 4.005 0 014.004 4.003v140.217a4 4 0 01-4.004 4.003H4.004A4.005 4.005 0 010 144.775V4.558z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#EDEDED" d="M-627-286H737v972H-627z" />
      <g transform="translate(-23.811 -120.573)">
        <use
          fill="#000"
          filter="url(#npymFull_svg__a)"
          xlinkHref="#npymFull_svg__b"
        />
        <use fill="#FFF" xlinkHref="#npymFull_svg__b" />
      </g>
      <path
        fill="#D8D8D8"
        fillRule="nonzero"
        d="M-23.811 24.165v-65.738h220.245v65.738a4 4 0 01-4 4H-19.81a4 4 0 01-4-4z"
        opacity={0.25}
      />
      <text
        fill="#000"
        fillOpacity={0.6}
        fontFamily="ProximaNova-Regular, Proxima Nova"
        fontSize={12}
        transform="translate(-24.408 -121.024)"
      >
        <tspan x={17} y={128.675}>
          {"634 PeM"}
        </tspan>
      </text>
      <text
        fill="#000"
        fillOpacity={0.6}
        fontFamily="ProximaNova-Regular, Proxima Nova"
        fontSize={12}
        transform="translate(-24.408 -121.024)"
      >
        <tspan x={17} y={107.21}>
          {"500 NPeM"}
        </tspan>
      </text>
      <text
        fill="#000"
        fillOpacity={0.8}
        fontFamily="ProximaNova-Semibold, Proxima Nova"
        fontSize={28}
        fontWeight={500}
        transform="translate(-24.408 -121.024)"
      >
        <tspan x={17} y={61.574}>
          {"1.505"}
        </tspan>
      </text>
      <text
        fill="#000"
        fillOpacity={0.8}
        fontFamily="ProximaNova-Regular, Proxima Nova"
        fontSize={14}
        transform="translate(-24.408 -121.024)"
      >
        <tspan x={17} y={30.574}>
          {"Etiquetas impressas"}
        </tspan>
      </text>
      <path d="M-627-286H737v972H-627z" fill="#000" fillOpacity={0.6} />
      <g transform="translate(-215 -43)">
        <use
          fill="#000"
          filter="url(#npymFull_svg__d)"
          xlinkHref="#npymFull_svg__c"
        />
        <use fill="#FFF" xlinkHref="#npymFull_svg__c" />
      </g>
      <g fillRule="nonzero" transform="translate(15 5)">
        <path
          fill="#FFF"
          stroke="#333"
          strokeDasharray="2,4"
          strokeLinecap="round"
          strokeWidth={2}
          d="M55 66H5V23a4 4 0 014-4h42a4 4 0 014 4v34.084"
        />
        <path
          fill="#FFDB15"
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M22 16.587h16a2 2 0 012 2v16.421a1 1 0 01-1.398.918L30 32.192l-8.602 3.734A1 1 0 0120 35.008v-16.42a2 2 0 012-2z"
        />
        <rect width={17} height={10} x={11} y={51} fill="#E9E9E9" rx={2} />
        <path
          stroke="#333"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M0 66h78v5a4 4 0 01-4 4H4a4 4 0 01-4-4v-5z"
        />
        <g stroke="#333" strokeLinecap="round" strokeWidth={2}>
          <path strokeDasharray="2,4" d="M55 44.5h32" />
          <path strokeLinejoin="round" d="M85 53.385l8.692-8.693L85 36" />
        </g>
        <g stroke="#333" strokeWidth={2} transform="translate(58)">
          <path fill="#FFF" d="M6 14h8v52H6z" />
          <circle cx={10} cy={10} r={10} fill="#FFF" />
          <path strokeLinecap="round" d="M10 10l4 4" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgNpymFull;
