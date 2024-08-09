import React from 'react';
import { BentoWrapper } from '../shared';
import { LineChart } from '../charts';
import { IPostInsightProps } from '@/types';

const PostInsight = (props: IPostInsightProps) => {
	const {users, posts} = props

	return (
		<BentoWrapper element={'div'} className='w-[506px] h-[247px]'>
			<div>
				<p className='header-text'>Post Insights</p>
			</div>
			<div className='mt-[25px] h-[300px]'>
				<LineChart users={users} posts={posts} />
			</div>
		</BentoWrapper>
	);
};

export default PostInsight;
