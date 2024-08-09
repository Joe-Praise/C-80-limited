import { SvgProps } from '@/types';
import React from 'react';

const TotalPhotoSvg = (props: SvgProps) => {
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
				d='M12.8462 13C15.8801 13 18.3396 10.5749 18.3396 7.58332C18.3396 4.59178 15.8801 2.16666 12.8462 2.16666C9.8122 2.16666 7.3527 4.59178 7.3527 7.58332C7.3527 10.5749 9.8122 13 12.8462 13Z'
				stroke={fill || '#20AEF3'}
				strokeWidth='1.5'
			/>
			<path
				d='M17.2412 17.3333H23.8333M18.3399 23.8333H5.44786C5.13625 23.8334 4.82819 23.7681 4.54413 23.6418C4.26006 23.5155 4.00649 23.3311 3.80024 23.1008C3.59398 22.8704 3.43977 22.5995 3.34783 22.3059C3.25589 22.0124 3.22832 21.7029 3.26696 21.398L3.69545 18.0136C3.7951 17.2274 4.18262 16.5041 4.78516 15.9798C5.3877 15.4555 6.16374 15.1663 6.96735 15.1666H7.35299L18.3399 23.8333ZM20.5373 14.0833V20.5833V14.0833Z'
				stroke={fill || '#20AEF3'}
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default TotalPhotoSvg;
