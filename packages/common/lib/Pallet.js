import React from "react";

const SvgPallet = props => (
  <svg width={150} height={150} viewBox="0 0 150 150" {...props}>
    <g fill="none" strokeWidth={2.5}>
      <rect
        width={29}
        height={11}
        x={25}
        y={111}
        fill="#FFF"
        stroke="#333"
        rx={3}
      />
      <rect
        width={29}
        height={11}
        x={94}
        y={111}
        fill="#FFF"
        stroke="#333"
        rx={3}
      />
      <rect
        width={114}
        height={9}
        x={18}
        y={106}
        fill="#FFF"
        stroke="#333"
        rx={3}
      />
      <rect
        width={42}
        height={35}
        x={28}
        y={71}
        fill="#FFDB15"
        stroke="#333"
        rx={2}
      />
      <rect
        width={52}
        height={19.819}
        x={67}
        y={34}
        fill="#FFDB15"
        stroke="#333"
        rx={2}
      />
      <g stroke="#333">
        <path
          fill="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M121.951 93.214v11.018a2 2 0 01-2 2H70.453a2 2 0 01-2-2V52.79a2 2 0 012-2h49.498a2 2 0 012 2v17.16"
        />
        <path
          fill="#FFDB15"
          d="M88.298 52.039V73.25a.7.7 0 00.997.635L95.1 71.17l5.805 2.715a.7.7 0 00.997-.635V52.04H88.298z"
        />
      </g>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.8}
        d="M122.25 76.5v5"
      />
      <g stroke="#333">
        <path
          fill="#FFF"
          strokeLinecap="round"
          d="M28 50.332V33.983c0-1.095.891-1.983 1.99-1.983h36.02c1.099 0 1.99.888 1.99 1.983v37.034A1.987 1.987 0 0166.01 73H29.99A1.987 1.987 0 0128 71.017v-5.694M28 54v2"
        />
        <path
          fill="#FFDB15"
          d="M42.04 33.333v15.642a.7.7 0 00.936.66l5.936-2.12 5.935 2.12a.7.7 0 00.936-.66V33.333H42.04z"
        />
      </g>
    </g>
  </svg>
);

export default SvgPallet;
