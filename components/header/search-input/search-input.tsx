import Link from 'next/link';

export function SearchInput() {
	return (
		<form className='lg:w-1/4 w-full'>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
					<svg
						className='w-4 h-4 '
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 20 20'
					>
						<path
							stroke='currentColor'
							stroke-width='2'
							d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
						/>
					</svg>
				</div>
				<input
					type='search'
					id='default-search'
					className='block w-full p-4 ps-10 m-0 text-sm  rounded-none border-4 border-current
					ring-inset focus:ring-black bg-transparent'
					placeholder='Search'
				/>
			</div>
		</form>
	);
}
