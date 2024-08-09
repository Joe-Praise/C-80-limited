import { cn } from '@/lib/utils';
import { LineChartProps } from '@/types';
import React, { useEffect, useState } from 'react';

const LineChart = (props: LineChartProps) => {
	const {
		wrapperClassName,
		lineClassName,
		calc: calcFig,
		wrapperColor,
		lineColor,
	} = props;

	const bg_color = `bg-[${lineColor}]`;

	const [calc, setCalc] = useState('0%');

	useEffect(() => {
		setTimeout(() => {
			setCalc(calcFig);
		}, 400);
	}, []);
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
				className={cn('absolute bg-red-400 inset-0 rounded-sm ', lineClassName)}
				style={{
					width: calc,
					background: lineColor,
					transition: 'width 0.6s ease',
					willChange: 'width',
				}}
			></div>
		</div>
	);
};

export default LineChart;
