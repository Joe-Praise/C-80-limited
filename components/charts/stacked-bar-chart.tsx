'use client';

import { Bar, BarChart } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
} from '@/components/ui/chart';
import { StackedBarChartProps } from '@/types';
import { getPostCommentData } from '@/lib/helperFunctions';

const StackedBarChart = (props: StackedBarChartProps) => {
	const { posts, comments } = props;
	const dataSet = getPostCommentData(posts, comments).slice(0, 6);

	const chartConfig = {
		commentCount: {
			label: 'Comment',
			color: 'var(--chart-200)',
		},
		postId: {
			label: 'Post',
			color: 'hsl(var(--chart-2))',
		},
	} satisfies ChartConfig;
	return (
		<Card className='bg-transparent border-none h-[150px] shadow-none'>
			<CardContent className='px-0 h-full border-none'>
				<ChartContainer
					config={chartConfig}
					className='w-full h-[150px] bg--400'
				>
					<BarChart
						accessibilityLayer
						data={dataSet}
						className=' w-full h-[150px]'
					>
						<ChartLegend content={<ChartLegendContent />} />
						<Bar
							dataKey='commentCount'
							stackId='a'
							fill='var(--chart-200)'
							radius={[0, 0, 4, 4]}
							barSize={15}
						/>
						<Bar
							dataKey='postId'
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
