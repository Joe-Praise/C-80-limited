'use client';
import { Area, AreaChart, XAxis, YAxis } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
import { IPostInsightProps } from '@/types';
import { getUserPostInsight } from '@/lib/helperFunctions';

const LineChart = (props: IPostInsightProps) => {
	const { users, posts } = props;
	const data_set = getUserPostInsight(users, posts);

	const chartConfig = {
		user: {
			label: 'user',
			color: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(169,223,216,1) 0%)',
		},
		total_posts: {
			label: 'total posts',
			color: 'hsl(var(--chart-2))',
		},
	} satisfies ChartConfig;

	return (
		<Card className='bg-transparent'>
			<CardContent className='p-0'>
				<ChartContainer config={chartConfig} className='w-[452px] h-[163px]'>
					<AreaChart
						accessibilityLayer
						data={data_set}
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
							dataKey='user'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0,4)}
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
							dataKey='total_posts'
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
