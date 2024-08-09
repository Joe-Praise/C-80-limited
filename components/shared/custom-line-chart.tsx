import { cn } from '@/lib/utils';
import { LineChartProps } from '@/types';
import React from 'react';

const LineChart = (props: LineChartProps) => {
	const { wrapperClassName, lineClassName, calc, wrapperColor, lineColor } =
		props;

	const bg_color = `bg-[${lineColor}]`;
	return (
		<div
			className={cn(
				'w-[246px] h-[3px] relative bg-white overflow-hidden rounded-sm',
				wrapperClassName,
				{
					[`bg-${wrapperColor}`]: !!wrapperColor,
				}
			)}
		>
			<div
				className={cn('absolute bg-red-400 inset-0 rounded-sm', lineClassName)}
				style={{ width: calc, background: lineColor }}
			></div>
		</div>
	);
};

export default LineChart;
