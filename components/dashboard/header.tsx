'use client';
import useDebounce from '@/hooks/UseDebounce';
import { Search } from 'lucide-react';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

const Header = () => {
	const searchRef = useRef<HTMLInputElement | null>(null);
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		// if search is less than 3 characters, reset the search
		if (debouncedSearch.length <= 2) {
			return;
		}

		// else if search is more than 2 characters, dispatch the search
		// and set the loading state to true for loader if not using tanstack

		// dispatch the search
	}, [debouncedSearch]);

	const applySearchFocus = () => {
		searchRef.current?.focus();
	};
	return (
		<div className='text-theme-placeholder '>
			<div className='w-full'>
				<form className='bg-primary-200 flex items-center gap-2 px-[16px] rounded-[8px]'>
					<Search
						className='text-theme-placeholder size-[13px] cursor-pointer'
						onClick={applySearchFocus}
					/>
					<input
						ref={searchRef}
						type='search'
						name='search'
						id='headerSearch'
						placeholder='Search here...'
						className='w-full h-[44px] outline-none bg-primary-200 text-xs font-medium leading-[14.52px]'
						onChange={(e) => handleSearch(e)}
					/>
				</form>
			</div>
		</div>
	);
};

export default Header;
