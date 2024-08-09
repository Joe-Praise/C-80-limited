import React from 'react';
import {
	BentoWrapper,
	SummaryCard,
	TotalAlbumSvg,
	TotalCommentSvg,
	TotalPhotoSvg,
	TotalPostSvg,
} from '../shared';

import { SummaryCardDetails } from '@/types';

const Welcome = () => {
	const loggedInUser = 'Joseph';
	const summary_card_details: SummaryCardDetails[] = [
		{
			id: '1',
			icon: <TotalPostSvg />,
			total: '$5k',
			label: 'Total Posts',
		},
		{
			id: '2',
			icon: <TotalCommentSvg />,
			total: '500',
			label: 'Total Comments',
		},
		{
			id: '3',
			icon: <TotalAlbumSvg />,
			total: '9',
			label: 'Total Posts',
		},
		{
			id: '4',
			icon: <TotalPhotoSvg />,
			total: '12',
			label: 'Total Photos',
		},
	];
	return (
		<BentoWrapper
			element={'div'}
			className='w-[504px] flex flex-col gap-[20px] justify-between py-[20px] px-[14px] '
		>
			<div>
				<p className='header-text'>Welcome, {loggedInUser}!</p>
				<p className='text-theme-300 text-[10px]'>Summary</p>
			</div>
			<div className=' h-full flex justify-between'>
				{summary_card_details.map((summary, index) => {
					return (
						<SummaryCard key={`${summary.label}_key_${index}`} {...summary} />
					);
				})}
			</div>
		</BentoWrapper>
	);
};

export default Welcome;
