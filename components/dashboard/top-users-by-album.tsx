import React from 'react';
import { BentoWrapper, LineChart } from '../shared';
import { TableHeader, TopUsersByAlbumProps } from '@/types';
import { cn } from '@/lib/utils';
import { getTopUsersByAlbumAndPhotoCount } from '@/lib/helperFunctions';

const TopUsersByAlbum = (props: TopUsersByAlbumProps) => {
	const { photos, users, albums } = props;
	const table_header: TableHeader[] = [
		{
			id: '1',
			label: '#',
		},
		{
			id: '2',
			label: 'Name',
		},
		{
			id: '3',
			label: 'Photos',
		},
		{
			id: '4',
			label: 'Albums',
		},
	];

	const colors: {
		lineColor: string;
		wrapperColor: string;
		btnBg: string;
	}[] = [
		{
			lineColor: '#FCB859',
			wrapperColor: 'chart',
			btnBg: 'rgba(252, 184, 89, 0.12)',
		},
		{
			lineColor: '#A9DFD8',
			wrapperColor: 'chart',
			btnBg: 'rgba(169, 223, 216, 0.12)',
		},
		{
			lineColor: '#28AEF3',
			wrapperColor: 'chart',
			btnBg: 'rgba(40, 174, 243, 0.12)',
		},
		{
			lineColor: '#F2C8ED',
			wrapperColor: 'chart',
			btnBg: 'rgba(242, 200, 237, 0.12)',
		},
	];

	const data = getTopUsersByAlbumAndPhotoCount(users, albums, photos);

	return (
		<BentoWrapper element={'section'} className='mt-[14px]'>
			<p className='header-text'>Top Users by Albums</p>

			<div className='mt-[19px] h-[228px]'>
				<table className=' w-full rounded-2x'>
					<thead className='text-left'>
						<tr className=' text-[13px] border-chart border-b-[0.5px]'>
							{table_header.map((item, index) => {
								return (
									<th
										key={`${item.label}_key_${index}`}
										className={cn(
											'h-[46px] font-semibold leading-[15.73px] text-theme-400',
											{
												'w-[15%]': index === 0,
											}
										)}
									>
										{item.label}
									</th>
								);
							})}
						</tr>
					</thead>

					<tbody>
						{data.map((user, index, arr) => {
							const calc = (user.photoCount / photos.length) * 200 + '%';
							const border_color = colors[index].lineColor;
							const btn_bg = colors[index].btnBg;
							return (
								<tr
									key={`${user.name}__${index}__key`}
									className={cn(
										'text-sm h-[49px] border-b-[0.5px] border-chart',
										{
											'border-b-0': index === arr.length - 1,
										}
									)}
								>
									<td className='align-middle font-inter text-[13px]'>
										{`${index < 9 ? `0${index + 1}` : `${index + 1}`}`}
									</td>
									<td className='align-middle font-inter text-[10px]'>
										{user.name}
									</td>
									<td className='align-middle font-inter'>
										<LineChart
											lineColor={border_color}
											wrapperColor={colors[index].wrapperColor}
											calc={calc}
										/>
									</td>
									<td className='align-middle font-inter'>
										<button
											className={cn(
												'border-[0.5px] border-solid block w-[57px] h-[22px] rounded-sm text-[10px] text-left px-[12px] '
											)}
											type='button'
											style={{
												borderColor: border_color,
												background: btn_bg,
											}}
										>
											{user.albumCount}
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</BentoWrapper>
	);
};

export default TopUsersByAlbum;
