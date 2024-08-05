'use client';

import {
	useParams,
	useRouter,
	usePathname,
} from 'next/navigation';

export function SearchInput() {
	const router = useRouter();
	const params = useParams();

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			search(e.target.value);
		}
	};

	const search = (term: string) => {
		if (!term) {
			router.push(`/`);
			return;
		}

		router.push(`/${term}`);
	};

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
							strokeWidth='2'
							d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
						/>
					</svg>
				</div>
				<input
					type='search'
					id='default-search'
					className='block w-full p-2 ps-10 m-0 text-sm rounded border-4 border-current ring-inset focus:ring-black bg-transparent'
					placeholder='Search'
					defaultValue={params?.search || ''}
					onKeyDown={handleKeyPress}
				/>
			</div>
		</form>
	);
}
