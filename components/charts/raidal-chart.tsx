'use client';

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [{ tag: 'todo', completed: 100, incomplete: 20 }];

const chartConfig = {
	completed: {
		label: 'completed',
		color: 'hsl(var(--chart-1))',
	},
	incomplete: {
		label: 'incomplete',
		color: 'hsl(var(--chart-2))',
	},
} satisfies ChartConfig;

const RadialChart = () => {
	const total_visitors = chartData[0].completed + chartData[0].completed;

	const total_todo = 200;
	const completed_todo = 150;
	const start_angle = 180;
	const end_angle = 0;

	const mapPercentageToAngle = () => {
		const completion_percentage = (completed_todo / total_todo) * 100;
		// const angle =
	};

	return (
		<Card className='flex flex-col bg-transparent shadow-none border-none w-[174px] h-[174px]'>
			<CardContent className='flex flex-1 items-center p-0 w-full h-full'>
				<ChartContainer config={chartConfig} className='p-0 w-full h-full'>
					<RadialBarChart
						data={chartData}
						endAngle={end_angle}
						innerRadius={70}
						outerRadius={140}
						startAngle={start_angle}
						className='w-[174px] h-[174px] p-0'
					>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text x={viewBox.cx} y={viewBox.cy} textAnchor='middle'>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) - 16}
													className='fill-theme text-2xl font-bold '
													style={{ color: 'red' }}
												>
													{/* {totalVisitors.toLocaleString()} */}
													80%
												</tspan>
											</text>
										);
									}
								}}
							/>
						</PolarRadiusAxis>
						<RadialBar
							dataKey='completed'
							stackId='a'
							fill='var(--chart-200)'
							className='stroke-transparent stroke-2'
						/>
						<RadialBar
							dataKey='incomplete'
							fill='var(--chart-bg)'
							stackId='a'
							className='stroke-transparent stroke-2'
						/>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
export default RadialChart;
