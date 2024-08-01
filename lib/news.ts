import axios from 'axios';
import { Article } from './types';
import Axios from 'axios';
import { getCountryInfo } from './utils';

export async function getNews(
	search?: string
): Promise<Article[]> {
	try {
		const newsApiURL = `https://newsapi.org/v2/top-headlines
	`;

		const { country_code } = await getCountryInfo();

		const params = {
			q: search,
			country: country_code,
			apiKey: process.env.NEWS_API_KEY,
			pageSize: 20,
			sortBy: 'popularity',
		};

		const { data } = await axios.get(newsApiURL, {
			params,
		});

		return await data.articles;
	} catch (error: any) {
		console.log(error);
		throw new Error(error);
	}
}
