import React from 'react';
import { BentoWrapper } from '../shared';
import { RadialCharts } from '../charts';
import { ITodo } from '@/services/queries/todos/types';
import { TodoProps } from '@/types';

const Todo = (props: TodoProps) => {
	const { todos } = props;
	
	return (
		<BentoWrapper element={'div'} className='h-[247px] w-[238px]'>
			<div>
				<p className='header-text'>Todo</p>
				<p className='text-theme-400 text-[10px] mt-[5px]'>Total Todos</p>
			</div>

			<div className='mt-[9px]'>
				<p className='font-bold text-xl text-chart-200 leading-[24.2px]'>
					{todos.length}
				</p>
				<p className='text-theme-400 text-[11px] leading-[13.31px] mt-[9px]'>
					Completed Todos / Total
				</p>
			</div>
			<div className='mt-[20px] ps-[18px]'>
				<RadialCharts todos={todos} />
			</div>
		</BentoWrapper>
	);
};

export default Todo;
