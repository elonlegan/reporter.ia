import {
	AvatarImage,
	AvatarFallback,
	Avatar,
} from '@/components/ui/avatar';
import { Article, Data } from '@/lib/types';
import ms from 'ms';
import { AINewsSummary } from './ai-news-summary';

export async function News({ summary, news }: Data) {
	return (
		<div className='mx-auto px-4 md:px-6 max-w-2xl grid gap-12'>
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
		<div className='flex gap-4'>
			<Avatar className='w-10 h-10 border'>
				<AvatarImage
					alt='@shadcn'
					src='/placeholder-user.jpg'
				/>
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div className='grid gap-4'>
				<div className='flex gap-4 items-start'>
					<div className='grid gap-0.5 text-sm'>
						<h3 className='font-semibold'>
							{article.author}
						</h3>
						<time
							className='text-sm text-gray-500 dark:text-gray-400'
							suppressHydrationWarning
						>
							{timeAgo(date)}
						</time>
					</div>
				</div>
				<div className='text-sm leading-loose text-gray-500 dark:text-gray-400'>
					<p>{article.description}</p>
				</div>
			</div>
		</div>
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
