import Link from 'next/link';
import { SearchInput } from './search-input/search-input';

export function Header() {
	return (
		<nav className='flex justify-between items-center pb-4 border-b-8 border-black mb-8 gap-4 flex-wrap'>
			<Link
				className='text-4xl sm:text-6xl md:text-8xl font-semibold font-serif'
				href='/'
			>
				REPORTER.IA
			</Link>
			<SearchInput />
		</nav>
	);
}
