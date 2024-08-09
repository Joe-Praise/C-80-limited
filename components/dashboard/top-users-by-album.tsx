import React from 'react';
import { BentoWrapper, LineChart } from '../shared';
import { TableHeader } from '@/types';
import { cn } from '@/lib/utils';

const TopUsersByAlbum = () => {
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

	const dummy_data = [
		{
			id: 1,
			name: 'Leanne Graham',
			username: 'Bret',
			email: 'Sincere@april.biz',
			address: {
				street: 'Kulas Light',
				suite: 'Apt. 556',
				city: 'Gwenborough',
				zipcode: '92998-3874',
				geo: {
					lat: '-37.3159',
					lng: '81.1496',
				},
			},
			phone: '1-770-736-8031 x56442',
			website: 'hildegard.org',
			company: {
				name: 'Romaguera-Crona',
				catchPhrase: 'Multi-layered client-server neural-net',
				bs: 'harness real-time e-markets',
			},
			color: {
				lineColor: '#FCB859',
				wrapperColor: 'chart',
				btnBg: 'rgba(252, 184, 89, 0.12)',
			},
		},
		{
			id: 2,
			name: 'Ervin Howell',
			username: 'Antonette',
			email: 'Shanna@melissa.tv',
			address: {
				street: 'Victor Plains',
				suite: 'Suite 879',
				city: 'Wisokyburgh',
				zipcode: '90566-7771',
				geo: {
					lat: '-43.9509',
					lng: '-34.4618',
				},
			},
			phone: '010-692-6593 x09125',
			website: 'anastasia.net',
			company: {
				name: 'Deckow-Crist',
				catchPhrase: 'Proactive didactic contingency',
				bs: 'synergize scalable supply-chains',
			},
			color: {
				lineColor: '#A9DFD8',
				wrapperColor: 'chart',
				btnBg: 'rgba(169, 223, 216, 0.12)',
			},
		},
		{
			id: 3,
			name: 'Clementine Bauch',
			username: 'Samantha',
			email: 'Nathan@yesenia.net',
			address: {
				street: 'Douglas Extension',
				suite: 'Suite 847',
				city: 'McKenziehaven',
				zipcode: '59590-4157',
				geo: {
					lat: '-68.6102',
					lng: '-47.0653',
				},
			},
			phone: '1-463-123-4447',
			website: 'ramiro.info',
			company: {
				name: 'Romaguera-Jacobson',
				catchPhrase: 'Face to face bifurcated interface',
				bs: 'e-enable strategic applications',
			},
			color: {
				lineColor: '#28AEF3',
				wrapperColor: 'chart',
				btnBg: 'rgba(40, 174, 243, 0.12)',
			},
		},
		{
			id: 4,
			name: 'Patricia Lebsack',
			username: 'Karianne',
			email: 'Julianne.OConner@kory.org',
			address: {
				street: 'Hoeger Mall',
				suite: 'Apt. 692',
				city: 'South Elvis',
				zipcode: '53919-4257',
				geo: {
					lat: '29.4572',
					lng: '-164.2990',
				},
			},
			phone: '493-170-9623 x156',
			website: 'kale.biz',
			company: {
				name: 'Robel-Corkery',
				catchPhrase: 'Multi-tiered zero tolerance productivity',
				bs: 'transition cutting-edge web services',
			},
			color: {
				lineColor: '#F2C8ED',
				wrapperColor: 'chart',
				btnBg: 'rgba(242, 200, 237, 0.12)',
			},
		},
	];
    
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
						{dummy_data.map((user, index, arr) => {
							const indexUpdate = index === 0 ? 2 : index + 1;
							const calc = 25 * indexUpdate + '%';
							const border_color = user.color.lineColor;
							const btn_bg = user.color.btnBg;
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
										{`${index < 9 ? `0${user.id}` : `${user.id}`}`}
									</td>
									<td className='align-middle font-inter text-[10px]'>{user.name}</td>
									<td className='align-middle font-inter'>
										<LineChart
											lineColor={user.color.lineColor}
											wrapperColor={user.color.wrapperColor}
											calc={calc}
										/>
									</td>
									<td className='align-middle font-inter'>
										<button
											className={cn(
												'border-[0.5px] border-solid block w-[57px] h-[22px] rounded-sm text-[10px] text-left px-[12px] '
												// {
												// 	[`${border_color}`]: !!user.color.lineColor,
												// }
											)}
											type='button'
											style={{
												borderColor: border_color,
												background: btn_bg,
											}}
										>
											46
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
