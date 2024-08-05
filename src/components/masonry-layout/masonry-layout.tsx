'use client';
import Masonry, {
	ResponsiveMasonry,
} from 'react-responsive-masonry';

export function MasonryLayout({ children }) {
	return (
		<div className='pt-6'>
			<ResponsiveMasonry
				columnsCountBreakPoints={{
					350: 1,
					750: 2,
					900: 4,
				}}
			>
				<Masonry gutter='0.75rem'>{children}</Masonry>
			</ResponsiveMasonry>
		</div>
	);
}
