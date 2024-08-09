import React from 'react';
import { BentoWrapper } from '../shared';
import { StackedBarChart } from '../charts';

const PostCommentVolume = () => {
	return (
		<BentoWrapper
			element={'div'}
			className='w-[238px]  flex flex-col justify-between'
		>
			<p className='header-text'>Post by Comment volume</p>
			<div className=''>
				<StackedBarChart />
			</div>
		</BentoWrapper>
	);
};

export default PostCommentVolume;

{
	/* <div className='flex items-center justify-center gap-[25px]'>
	<div className='flex items-center gap-[11px]'>
		<span className='size-2 bg-chart-200 block rounded-full'></span>
		<p className='text-[10px] text-theme-300 font-medium'>Comment</p>
	</div>
	<div className='h-[17px] w-[2px] bg-theme-400'></div>
	<div className='flex items-center gap-[11px]'>
		<span className='size-2 bg-chart block rounded-full'></span>
		<p className='text-[10px] text-theme-300 font-medium'>Post</p>
	</div>
</div> */
}
