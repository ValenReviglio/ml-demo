import React from "react";

const SvgPalletYellow = props => (
  <svg width={150} height={150} viewBox="0 0 150 150" {...props}>
    <g fill="none" strokeWidth={2.5} transform="translate(18 30)">
      <rect
        width={29}
        height={11}
        x={7}
        y={79}
        fill="#FFDB15"
        stroke="#333"
        rx={3}
      />
      <rect
        width={29}
        height={11}
        x={76}
        y={79}
        fill="#FFDB15"
        stroke="#333"
        rx={3}
      />
      <rect width={114} height={9} y={74} fill="#FFDB15" stroke="#333" rx={3} />
      <rect
        width={42}
        height={35}
        x={10}
        y={39}
        fill="#EDCB10"
        stroke="#333"
        rx={2}
      />
      <rect
        width={52}
        height={19.819}
        x={49}
        y={2}
        fill="#EDCB10"
        stroke="#333"
        rx={2}
      />
      <g stroke="#333">
        <path
          fill="#FFDB15"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M103.951 61.214v11.018a2 2 0 01-2 2H52.453a2 2 0 01-2-2V20.79a2 2 0 012-2h49.498a2 2 0 012 2v17.16"
        />
        <path
          fill="#EDCB10"
          d="M70.298 20.039V41.25a.7.7 0 00.997.635L77.1 39.17l5.805 2.715a.7.7 0 00.997-.635V20.04H70.298z"
        />
      </g>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.8}
        d="M104.25 44.5v5"
      />
      <g stroke="#333">
        <path
          fill="#FFDB15"
          strokeLinecap="round"
          d="M10 18.332V1.983C10 .888 10.891 0 11.99 0h36.02C49.109 0 50 .888 50 1.983v37.034A1.987 1.987 0 0148.01 41H11.99A1.987 1.987 0 0110 39.017v-5.694"
        />
        <path fill="#FFF" strokeLinecap="round" d="M10 22v2" />
        <path
          fill="#EDCB10"
          d="M24.04 1.333v15.642a.7.7 0 00.936.66l5.936-2.12 5.935 2.12a.7.7 0 00.936-.66V1.333H24.04z"
        />
      </g>
    </g>
  </svg>
);

export default SvgPalletYellow;
