import * as d3 from 'd3';
import { type FC } from 'react';

type Props = {
  data: d3.NumberValue[];
  width: number;
  height: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  statusColor: string;
};

const LineChart: FC<Props> = ({
  data,
  width,
  height,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  statusColor,
}) => {
  const x: d3.ScaleLinear<number, number, never> = d3.scaleLinear(
    [0, data.length - 1],
    [marginLeft, width - marginRight],
  );

  const y: d3.ScaleLinear<number, number, never> = d3.scaleLinear(
    d3.extent(data) as Iterable<d3.NumberValue>,
    [height - marginBottom, marginTop],
  );

  const line: d3.Line<d3.NumberValue> = d3.line((_d, i) => x(i), y);

  return (
    <svg width={width} height={height} viewBox={`0, 0, ${width}, ${height}`}>
      <path
        fill='none'
        stroke={statusColor}
        strokeWidth={1.5}
        strokeLinejoin='round'
        strokeLinecap='round'
        d={line(data) ?? undefined}
      />
      <g
        fill='transparent'
        stroke='transparent'
        strokeWidth={1.5}
        strokeLinejoin='round'
      >
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r={2.5} />
        ))}
      </g>
    </svg>
  );
};

export default LineChart;
