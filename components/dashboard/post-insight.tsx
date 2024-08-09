import React from 'react';
import { BentoWrapper } from '../shared';
import { LineChart } from '../charts';

const PostInsight = () => {
	const data = [186, 305, 237, 73, 209, 214];
	const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
	return (
		<BentoWrapper element={'div'} className='w-[506px] h-[247px]'>
			<div>
				<p className='header-text'>Post Insights</p>
			</div>
			<div className='mt-[25px] h-[300px]'>
				<LineChart  />
			</div>
		</BentoWrapper>
	);
};

export default PostInsight;
