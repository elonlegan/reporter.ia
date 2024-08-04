import { Article, Data } from '@/lib/types';
import ms from 'ms';
import { AINewsSummary } from './ai-news-summary';

export function News({ summary, news }: Data) {
	return (
		<div className='grid grid-cols-12 grid-rows-12 gap-4 pt-6'>
			<AINewsSummary summary={summary} />
			{news?.map((article) => (
				<ArticleCard
					key={article.source.id + article.url}
					article={article}
				/>
			))}
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
		<article className='border-b hover:shadow-md col-span-2 p-4 transition grayscale hover:grayscale-0'>
			{article.urlToImage && (
				<figure className=''>
					<img
						src={article.urlToImage}
						alt={article.title + ' image'}
					/>
				</figure>
			)}
			<h3 className='text-xl font-bold'>{article.title}</h3>
			<p>{article.description}</p>
			<time
				className='text-sm text-gray-500 dark:text-gray-400'
				suppressHydrationWarning
			>
				{timeAgo(date)}
			</time>
		</article>
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
