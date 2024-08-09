import { SvgProps } from '@/types';
import React from 'react';

const TotalCommentSvg = (props: SvgProps) => {
	const { className, fill } = props;
	return (
		<svg
			width='26'
			height='26'
			viewBox='0 0 26 26'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M17.9967 3.69315H20.7625C21.0589 3.69315 21.3431 3.81204 21.5527 4.02367C21.7623 4.2353 21.88 4.52233 21.88 4.82163V23.4415C21.88 23.7408 21.7623 24.0279 21.5527 24.2395C21.3431 24.4511 21.0589 24.57 20.7625 24.57H5.1175C4.82112 24.57 4.53688 24.4511 4.32731 24.2395C4.11774 24.0279 4 23.7408 4 23.4415V4.82163C4 4.52233 4.11774 4.2353 4.32731 4.02367C4.53688 3.81204 4.82112 3.69315 5.1175 3.69315H9.02875V5.38587H16.8512V3.69315H17.9967Z'
				stroke={fill || '#A9DFD8'}
				strokeWidth='1.5'
				strokeLinejoin='round'
			/>
			<path
				d='M14.6167 10.4636L10.1467 14.9781H15.7364L11.2642 19.492M9.02916 2H16.8517V5.38544H9.02916V2Z'
				stroke={fill || '#A9DFD8'}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default TotalCommentSvg;
