import { summarizeNews } from './ai-summary';
import { getNews } from './news';
import { Data } from './types';

export async function getData(
	search?: string
): Promise<Data> {
	const news = await getNews(search);

	const summary = await summarizeNews(news);

	return { summary, news };
}
