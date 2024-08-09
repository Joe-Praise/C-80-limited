'use client';
import { Area, AreaChart, XAxis, YAxis } from 'recharts';

import {
	Card,
	CardContent,
} from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
	{ mon: 'January', score: 186 },
	{ mon: 'February', score: 305 },
	{ mon: 'March', score: 237 },
	{ mon: 'April', score: 73 },
	{ mon: 'May', score: 209 },
	{ mon: 'June', score: 214 },
	{ mon: 'January', score: 186 },
	{ mon: 'February', score: 305 },
	{ mon: 'March', score: 237 },
	{ mon: 'April', score: 73 },
	{ mon: 'May', score: 209 },
	{ mon: 'June', score: 214 },
	{ mon: 'January', score: 186 },
	{ mon: 'February', score: 305 },
	{ mon: 'March', score: 237 },
	{ mon: 'April', score: 373 },
	{ mon: 'May', score: 209 },
	{ mon: 'June', score: 214 },
	{ mon: 'January', score: 186 },
	{ mon: 'February', score: 305 },
	{ mon: 'March', score: 287 },
	{ mon: 'April', score: 253 },
	{ mon: 'May', score: 209 },
	{ mon: 'June', score: 114 },
];

const chartConfig = {
	score: {
		label: 'score',
		color: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(169,223,216,1) 0%)',
	},
	mon: {
		label: 'mon',
		color: 'hsl(var(--chart-2))',
	},
} satisfies ChartConfig;

const LineChart = () => {
	return (
		<Card className='bg-transparent'>
			<CardContent className='p-0'>
				<ChartContainer config={chartConfig} className='w-[452px] h-[163px]'>
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<defs>
							<linearGradient id='customGradient' x1='0' y1='0' x2='0' y2='1.8'>
								<stop offset='-60.54%' stopColor='#A9DFD8' stopOpacity='1' />
								<stop offset='50.44%' stopColor='#A9DFD8' stopOpacity='0.01' />
							</linearGradient>
						</defs>
						<defs>
							<linearGradient id='mobileGradient' x1='0' y1='0' x2='0' y2='1.8'>
								<stop offset='-6.54%' stopColor='#A9DFD8' stopOpacity='1' />
								<stop offset='50.44%' stopColor='#A9DFD8' stopOpacity='0.01' />
							</linearGradient>
						</defs>
						<XAxis
							dataKey='mon'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickCount={3}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='line' />}
						/>
						<Area
							dataKey='score'
							type='linear'
							fill='url(#customGradient)'
							fillOpacity={0.5}
							stroke='var(--chart-200)'
							strokeWidth={'4px'}
						/>
						<Area
							dataKey='desktop'
							type='linear'
							fill='url(#mobileGradient)'
							fillOpacity={0.5}
							stroke='var(--chart-200)'
							strokeWidth={'4px'}
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
export default LineChart;
