import { SummaryCardDetails } from '@/types';
import React from 'react';
import BentoWrapper from './bento-wrapper';

const SummaryCard = (props: SummaryCardDetails) => {
	const { id, icon, total, label } = props;
	const checkTotal = () => {
		if (Number(total) > 1000) {
			return total[0] + 'k';
		}
		return total
	};
	return (
		<BentoWrapper
			element={'article'}
			className='h-[107px] w-[104px] bg-background pt-[11px] ps-[14px] pb-[23px] pe-[2px]'
		>
			<div>{icon}</div>
			<div className='mt-[12px]'>
				<p className='text-[15px] font-semibold m-0'>{checkTotal()}</p>
				<p className='font-medium leading-[12.1px] text-[10px] text-theme-200 mt-[5px]'>
					{label}
				</p>
			</div>
		</BentoWrapper>
	);
};

export default SummaryCard;
