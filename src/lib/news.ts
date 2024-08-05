import axios from 'axios';
import { Article } from './types';
import { getPreferredLanguage } from './utils';
import { extract } from '@extractus/article-extractor';

const newsApiBase = 'https://newsapi.org/v2';

export async function getNews(
	search?: string
): Promise<Article[]> {
	try {
		const newsApiURL = `${newsApiBase}/top-headlines`;

		const newsSources = await getSources();

		await getSources();

		const params = {
			q: search,
			sources: newsSources.join(','),
			apiKey: process.env.NEWS_API_KEY,
			pageSize: 8,
		};

		const {
			data: { articles },
		} = await axios.get(newsApiURL, {
			params,
		});

		const news = await Promise.all(
			articles.map(getContentFromNews)
		);

		return news;
	} catch (error: any) {
		console.log(error);
		return [];
	}
}

export async function getSources(): Promise<string[]> {
	try {
		const newsApiURL = `${newsApiBase}/top-headlines/sources`;

		const { code: language } = await getPreferredLanguage();

		const params = {
			language,
			apiKey: process.env.NEWS_API_KEY,
		};

		let {
			data: { sources },
		} = await axios.get(newsApiURL, {
			params,
		});

		sources = sources.map(
			(source: { id: any }) => source.id
		);

		sources = sources.filter(
			(source: string[]) => !source.includes('google')
		);

		return sources;
	} catch (error: any) {
		console.log(error);
		return [];
	}
}

export async function getContentFromNews(
	article: Article
): Promise<Article> {
	try {
		const articleData = await extract(article?.url);
		const content = articleData
			? articleData?.content?.replace(/<[^>]*>/g, '')
			: article.description;

		return {
			...article,
			content,
		};
	} catch (error: any) {
		console.log(error);
		return article;
	}
}
