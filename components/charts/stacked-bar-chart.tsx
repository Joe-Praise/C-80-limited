'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
	{ month: 'January', desktop: 186, mobile: 400 },
	{ month: 'February', desktop: 305, mobile: 400 },
	{ month: 'March', desktop: 237, mobile: 400 },
	{ month: 'April', desktop: 73, mobile: 400 },
	{ month: 'May', desktop: 209, mobile: 400 },
	{ month: 'June', desktop: 214, mobile: 400 },
];

const chartConfig = {
	desktop: {
		label: 'Comment',
		color: 'var(--chart-200)',
	},
	mobile: {
		label: 'Post',
		color: 'hsl(var(--chart-2))',
	},
} satisfies ChartConfig;

const StackedBarChart = () => {
	return (
		<Card className='bg-transparent border-none h-[150px] shadow-none'>
			<CardContent className='px-0 h-full border-none'>
				<ChartContainer config={chartConfig} className='w-full h-[150px] bg--400'>
					<BarChart accessibilityLayer data={chartData} className=' w-full h-[150px]'>
						<ChartLegend content={<ChartLegendContent />} />
						<Bar
							dataKey='desktop'
							stackId='a'
							fill='var(--chart-200)'
							radius={[0, 0, 4, 4]}
							barSize={15}
						/>
						<Bar
							dataKey='mobile'
							stackId='a'
							fill='var(--chart-bg)'
							radius={[4, 4, 0, 0]}
							barSize={50}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};

export default StackedBarChart;
