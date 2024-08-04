import Masonry, {
	ResponsiveMasonry,
} from 'react-responsive-masonry';

export function Loading() {
	return (
		<ResponsiveMasonry
			columnsCountBreakPoints={{
				350: 1,
				750: 2,
				900: 4,
			}}
		>
			<Masonry gutter='0.75rem'>
				<div
					role='status'
					className='max-w-sm animate-pulse'
				>
					<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
					<span className='sr-only'>Loading...</span>
				</div>
				<div
					role='status'
					className='max-w-sm animate-pulse'
				>
					<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
					<span className='sr-only'>Loading...</span>
				</div>
				<div
					role='status'
					className='max-w-sm animate-pulse'
				>
					<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
					<span className='sr-only'>Loading...</span>
				</div>
				<div
					role='status'
					className='max-w-sm animate-pulse'
				>
					<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
					<span className='sr-only'>Loading...</span>
				</div>
				<div
					role='status'
					className='max-w-sm animate-pulse'
				>
					<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
					<span className='sr-only'>Loading...</span>
				</div>
				<div
					role='status'
					className='max-w-sm animate-pulse'
				>
					<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
					<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
					<span className='sr-only'>Loading...</span>
				</div>
			</Masonry>
		</ResponsiveMasonry>
	);
}
