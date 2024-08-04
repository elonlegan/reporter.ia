'use client';

import { Article, Data } from '@/lib/types';
import ms from 'ms';
import { AINewsSummary } from './ai-news-summary';
import Masonry, {
	ResponsiveMasonry,
} from 'react-responsive-masonry';

export function News({ summary, news }: Data) {
	return (
		<div className='pt-6'>
			<ResponsiveMasonry
				columnsCountBreakPoints={{
					350: 1,
					750: 2,
					900: 4,
				}}
			>
				<Masonry gutter='0.75rem'>
					<AINewsSummary summary={summary} />
					{news?.map((article) => (
						<ArticleCard
							key={article.source.id + article.url}
							article={article}
						/>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
}

export function ArticleCard({
	article,
}: {
	article: Article;
}) {
	const date = new Date(article.publishedAt);

	return (
		<>
			<article className=' hover:shadow-md col-span-2  transition grayscale hover:grayscale-0'>
				{article.urlToImage && (
					<figure className=''>
						<img
							src={article.urlToImage}
							alt={article.title + ' image'}
						/>
					</figure>
				)}
				<div className='p-2'>
					<h3 className='text-xl font-bold '>
						{article.title}
					</h3>
					<p className='text-justify'>
						{article.description}
					</p>
					<time
						className='text-sm text-gray-600 '
						suppressHydrationWarning
					>
						{timeAgo(date)}
					</time>
				</div>
			</article>
			<div className='bg-black w-full h-1 rounded my-3'></div>
		</>
	);
}

/**
 * You probably want to wrap the parent element of this component with `suppressHydrationWarning`
 */
const timeAgo = (date: Date, suffix = true) => {
	if (Date.now() - date.getTime() < 1000) {
		return 'Ahora';
	}

	return `hace ${ms(Date.now() - date.getTime(), {
		long: true,
	})}`;
};
