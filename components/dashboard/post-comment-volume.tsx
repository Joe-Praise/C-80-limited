import React from 'react';
import { BentoWrapper } from '../shared';
import { StackedBarChart } from '../charts';
import { StackedBarChartProps } from '@/types';

const PostCommentVolume = (props: StackedBarChartProps) => {
	const { posts, comments } = props;
	return (
		<BentoWrapper
			element={'div'}
			className='w-[238px]  flex flex-col justify-between'
		>
			<p className='header-text'>Post by Comment volume</p>
			<div className=''>
				<StackedBarChart posts={posts} comments={comments} />
			</div>
		</BentoWrapper>
	);
};

export default PostCommentVolume;
