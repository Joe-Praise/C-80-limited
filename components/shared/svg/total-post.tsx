import { SvgProps } from '@/types';
import React from 'react';

const TotalPostSvg = (props: SvgProps) => {
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
				d='M23.2014 6.95138L13.2257 1.08333L3.25 6.95138V18.6875L13.2257 24.5555L23.2014 18.6875V6.95138Z'
				stroke={fill || '#FEB95A'}
				strokeWidth='1.95'
				strokeLinejoin='round'
			/>
			<path
				d='M8.53125 13.993V16.3403M13.2257 11.6458V16.3403V11.6458ZM17.9201 9.2986V16.3403V9.2986Z'
				stroke={fill || '#FEB95A'}
				strokeWidth='1.95'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default TotalPostSvg;
