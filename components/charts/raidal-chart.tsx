'use client';

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import { TodoProps } from '@/types';
import { calculateTodosStatus } from '@/lib/helperFunctions';

const RadialChart = (props: TodoProps) => {
	const { todos } = props;

	const todo_stat = calculateTodosStatus(todos);

	const chartData = [
		{
			tag: 'todo',
			completed: todo_stat.completedTaskCount,
			incomplete: todo_stat.incomplete,
		},
	];

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

	return (
		<Card className='flex flex-col bg-transparent shadow-none border-none w-[174px] h-[174px]'>
			<CardContent className='flex flex-1 items-center p-0 w-full h-full'>
				<ChartContainer config={chartConfig} className='p-0 w-full h-full'>
					<RadialBarChart
						data={chartData}
						endAngle={0}
						innerRadius={70}
						outerRadius={140}
						startAngle={180}
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
													{todo_stat.completion_percentage}%
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
