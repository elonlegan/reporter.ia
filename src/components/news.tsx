'use client';

import { Article, Data } from '@/src/lib/types';
import ms from 'ms';
import { AINewsSummary } from './ai-news-summary';
import { MasonryLayout } from './masonry-layout/masonry-layout';
import Image from 'next/image';

export function News({ summary, news }: Data) {
	return (
		<MasonryLayout>
			<AINewsSummary summary={summary} />
			{news?.map((article, index) => (
				<ArticleCard key={index} article={article} />
			))}
		</MasonryLayout>
	);
}

export function ArticleCard({
	article,
}: {
	article: Article;
}) {
	const date = new Date(article.publishedAt);

	return (
		<a
			target='_blank'
			href={article.url}
			rel='noopener noreferrer'
		>
			<article className=' hover:shadow-md col-span-2  transition grayscale hover:grayscale-0'>
				{article.urlToImage && (
					<figure>
						<Image
							loader={() => article.urlToImage}
							src={article.urlToImage}
							alt={article.title + ' image'}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '100%' }}
							quality={75}
							loading='lazy'
						/>
					</figure>
				)}
				<div className='p-2'>
					<h3 className='text-xl font-bold mb-2'>
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
		</a>
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
