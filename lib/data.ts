import { summarizeNews } from './ai-summary';
import { getNews } from './news';
import { Data } from './types';

export async function getData(
	search?: string
): Promise<Data> {
	const news = await getNews(search);

	// const summary = await summarizeNews(news);

	return {
		summary: 'summary',
		news: [
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'Harvard Crimson',
				title:
					'ALAN GARBER ’76 TO SERVE AS HARVARD’S 31ST PRESIDENT UNTIL JUNE 2027 - Harvard Crimson',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMikwFBVV95cUxPTnhXTGpXS1hla2U2LWN5bXZhcTlyQWwycTdrTndVeFFaOGhrX3ZqOElvSHBLSGttTWV5X2RaX09QRzVMRkFMTllnZHZ6Q0FTR19rZ1dMbTd1WDJwdkpPOUktUnJqZF8tejZ4N2kxQUs2TGp1aldVX0s1VnVYY2dkSjdjbC1lS0t5eVdYSzMybC1MOHc?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:50:28Z',
				content: null,
			},
			{
				source: {
					id: null,
					name: 'BBC News',
				},
				author: null,
				title:
					'US deploys jets and warships as Iran threatens Israel - BBC.com',
				description:
					'Pentagon announces Middle East reinforcements as Iran says it will "punish" Israel for assassination of Hamas leader.',
				url: 'https://www.bbc.com/news/articles/cw5y5637eqdo',
				urlToImage:
					'https://ichef.bbci.co.uk/news/1024/branded_news/1d93/live/70204b70-5121-11ef-b852-13c9a919482c.jpg',
				publishedAt: '2024-08-02T23:36:59Z',
				content:
					'The United States will deploy additional warships and fighter jets to the Middle East to help defend Israel from possible attacks by Iran and its proxies, the Pentagon said.\r\nTensions remain high in … [+2448 chars]',
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'Fox News',
				title:
					'Aspirin may be linked to lower risk of colorectal cancer, new study suggests - Fox News',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMimAFBVV95cUxNQ0dNZFlrSHlQTmlUaVRrcDhKRXY0WVU4SVhuX1hxdG1neHRqS3REaC1RVGRHYjc3UEY3WjU1Ym8xYjduSl9PeDU3Mi1UTG43Sko1Z3IzNnAtaTlKREE4TG9aS284bjR2clNNOVRQS0FZVHJ1ZXZKY2xXTnpvdzBZcTRHVnZVSmJFZHVpa0JUMDMzTnZzX3dncNIBngFBVV95cUxQeS02Vy02QlZJYkhvcU42NVNvcDFBM0U4bG15VGdXN3JIc1FMazNlRmhydThlZWRHc2Q5T2lGdGpwdjhRWUdCSlJ4R0lzVW9TSTJpTlFMVVhOMUpVRktobGRFN1ByZElCYllEajlxZi1mZmtlS2hueHNaRG43cHBTaEF0ZEhoNlducnFKT29SemR1dDlkVldmLVZlLWFSdw?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:35:00Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'NBC Sports',
				title:
					"Jean-Phillipe Mateta's goal enough for France to win 1-0 over Argentina in Olympic QF | NBC Sports - NBC Sports",
				description: null,
				url: 'https://news.google.com/rss/articles/CCAiC2doSFhJQlZRem13mAEB?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:19:12Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'New York Post ',
				title:
					'Aerosmith retires from touring, says Steven Tyler’s voice can’t recover from injury - New York Post ',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMiswFBVV95cUxQbkRHRVNBY0pCbWxJbjlFMzJ2c1FMelRkZnJIYTB2d1AxTmV6bXN0TF9rckN4S2lIYnZNR3d6dlZzSHFRaXh5SUphTjIxQWhVdWZPQk5IUjhkRGRQaURIdXU5YzVsVTRXVHdGbHdvVUtlSnB1LTQ5bnBYX0tDdUV1dDZMNF9yRkxHVXFwejk1bm5CQm1USUpxLVlOeTBFWHozWEE0RUEwOThFelRSczhrcEZrcw?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:09:00Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'Harvard Crimson',
				title:
					'ALAN GARBER ’76 TO SERVE AS HARVARD’S 31ST PRESIDENT UNTIL JUNE 2027 - Harvard Crimson',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMikwFBVV95cUxPTnhXTGpXS1hla2U2LWN5bXZhcTlyQWwycTdrTndVeFFaOGhrX3ZqOElvSHBLSGttTWV5X2RaX09QRzVMRkFMTllnZHZ6Q0FTR19rZ1dMbTd1WDJwdkpPOUktUnJqZF8tejZ4N2kxQUs2TGp1aldVX0s1VnVYY2dkSjdjbC1lS0t5eVdYSzMybC1MOHc?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:50:28Z',
				content: null,
			},
			{
				source: {
					id: null,
					name: 'BBC News',
				},
				author: null,
				title:
					'US deploys jets and warships as Iran threatens Israel - BBC.com',
				description:
					'Pentagon announces Middle East reinforcements as Iran says it will "punish" Israel for assassination of Hamas leader.',
				url: 'https://www.bbc.com/news/articles/cw5y5637eqdo',
				urlToImage:
					'https://ichef.bbci.co.uk/news/1024/branded_news/1d93/live/70204b70-5121-11ef-b852-13c9a919482c.jpg',
				publishedAt: '2024-08-02T23:36:59Z',
				content:
					'The United States will deploy additional warships and fighter jets to the Middle East to help defend Israel from possible attacks by Iran and its proxies, the Pentagon said.\r\nTensions remain high in … [+2448 chars]',
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'Fox News',
				title:
					'Aspirin may be linked to lower risk of colorectal cancer, new study suggests - Fox News',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMimAFBVV95cUxNQ0dNZFlrSHlQTmlUaVRrcDhKRXY0WVU4SVhuX1hxdG1neHRqS3REaC1RVGRHYjc3UEY3WjU1Ym8xYjduSl9PeDU3Mi1UTG43Sko1Z3IzNnAtaTlKREE4TG9aS284bjR2clNNOVRQS0FZVHJ1ZXZKY2xXTnpvdzBZcTRHVnZVSmJFZHVpa0JUMDMzTnZzX3dncNIBngFBVV95cUxQeS02Vy02QlZJYkhvcU42NVNvcDFBM0U4bG15VGdXN3JIc1FMazNlRmhydThlZWRHc2Q5T2lGdGpwdjhRWUdCSlJ4R0lzVW9TSTJpTlFMVVhOMUpVRktobGRFN1ByZElCYllEajlxZi1mZmtlS2hueHNaRG43cHBTaEF0ZEhoNlducnFKT29SemR1dDlkVldmLVZlLWFSdw?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:35:00Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'NBC Sports',
				title:
					"Jean-Phillipe Mateta's goal enough for France to win 1-0 over Argentina in Olympic QF | NBC Sports - NBC Sports",
				description: null,
				url: 'https://news.google.com/rss/articles/CCAiC2doSFhJQlZRem13mAEB?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:19:12Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'New York Post ',
				title:
					'Aerosmith retires from touring, says Steven Tyler’s voice can’t recover from injury - New York Post ',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMiswFBVV95cUxQbkRHRVNBY0pCbWxJbjlFMzJ2c1FMelRkZnJIYTB2d1AxTmV6bXN0TF9rckN4S2lIYnZNR3d6dlZzSHFRaXh5SUphTjIxQWhVdWZPQk5IUjhkRGRQaURIdXU5YzVsVTRXVHdGbHdvVUtlSnB1LTQ5bnBYX0tDdUV1dDZMNF9yRkxHVXFwejk1bm5CQm1USUpxLVlOeTBFWHozWEE0RUEwOThFelRSczhrcEZrcw?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:09:00Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'Harvard Crimson',
				title:
					'ALAN GARBER ’76 TO SERVE AS HARVARD’S 31ST PRESIDENT UNTIL JUNE 2027 - Harvard Crimson',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMikwFBVV95cUxPTnhXTGpXS1hla2U2LWN5bXZhcTlyQWwycTdrTndVeFFaOGhrX3ZqOElvSHBLSGttTWV5X2RaX09QRzVMRkFMTllnZHZ6Q0FTR19rZ1dMbTd1WDJwdkpPOUktUnJqZF8tejZ4N2kxQUs2TGp1aldVX0s1VnVYY2dkSjdjbC1lS0t5eVdYSzMybC1MOHc?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:50:28Z',
				content: null,
			},
			{
				source: {
					id: null,
					name: 'BBC News',
				},
				author: null,
				title:
					'US deploys jets and warships as Iran threatens Israel - BBC.com',
				description:
					'Pentagon announces Middle East reinforcements as Iran says it will "punish" Israel for assassination of Hamas leader.',
				url: 'https://www.bbc.com/news/articles/cw5y5637eqdo',
				urlToImage:
					'https://ichef.bbci.co.uk/news/1024/branded_news/1d93/live/70204b70-5121-11ef-b852-13c9a919482c.jpg',
				publishedAt: '2024-08-02T23:36:59Z',
				content:
					'The United States will deploy additional warships and fighter jets to the Middle East to help defend Israel from possible attacks by Iran and its proxies, the Pentagon said.\r\nTensions remain high in … [+2448 chars]',
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'Fox News',
				title:
					'Aspirin may be linked to lower risk of colorectal cancer, new study suggests - Fox News',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMimAFBVV95cUxNQ0dNZFlrSHlQTmlUaVRrcDhKRXY0WVU4SVhuX1hxdG1neHRqS3REaC1RVGRHYjc3UEY3WjU1Ym8xYjduSl9PeDU3Mi1UTG43Sko1Z3IzNnAtaTlKREE4TG9aS284bjR2clNNOVRQS0FZVHJ1ZXZKY2xXTnpvdzBZcTRHVnZVSmJFZHVpa0JUMDMzTnZzX3dncNIBngFBVV95cUxQeS02Vy02QlZJYkhvcU42NVNvcDFBM0U4bG15VGdXN3JIc1FMazNlRmhydThlZWRHc2Q5T2lGdGpwdjhRWUdCSlJ4R0lzVW9TSTJpTlFMVVhOMUpVRktobGRFN1ByZElCYllEajlxZi1mZmtlS2hueHNaRG43cHBTaEF0ZEhoNlducnFKT29SemR1dDlkVldmLVZlLWFSdw?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:35:00Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'NBC Sports',
				title:
					"Jean-Phillipe Mateta's goal enough for France to win 1-0 over Argentina in Olympic QF | NBC Sports - NBC Sports",
				description: null,
				url: 'https://news.google.com/rss/articles/CCAiC2doSFhJQlZRem13mAEB?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:19:12Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'New York Post ',
				title:
					'Aerosmith retires from touring, says Steven Tyler’s voice can’t recover from injury - New York Post ',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMiswFBVV95cUxQbkRHRVNBY0pCbWxJbjlFMzJ2c1FMelRkZnJIYTB2d1AxTmV6bXN0TF9rckN4S2lIYnZNR3d6dlZzSHFRaXh5SUphTjIxQWhVdWZPQk5IUjhkRGRQaURIdXU5YzVsVTRXVHdGbHdvVUtlSnB1LTQ5bnBYX0tDdUV1dDZMNF9yRkxHVXFwejk1bm5CQm1USUpxLVlOeTBFWHozWEE0RUEwOThFelRSczhrcEZrcw?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:09:00Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'Harvard Crimson',
				title:
					'ALAN GARBER ’76 TO SERVE AS HARVARD’S 31ST PRESIDENT UNTIL JUNE 2027 - Harvard Crimson',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMikwFBVV95cUxPTnhXTGpXS1hla2U2LWN5bXZhcTlyQWwycTdrTndVeFFaOGhrX3ZqOElvSHBLSGttTWV5X2RaX09QRzVMRkFMTllnZHZ6Q0FTR19rZ1dMbTd1WDJwdkpPOUktUnJqZF8tejZ4N2kxQUs2TGp1aldVX0s1VnVYY2dkSjdjbC1lS0t5eVdYSzMybC1MOHc?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:50:28Z',
				content: null,
			},
			{
				source: {
					id: null,
					name: 'BBC News',
				},
				author: null,
				title:
					'US deploys jets and warships as Iran threatens Israel - BBC.com',
				description:
					'Pentagon announces Middle East reinforcements as Iran says it will "punish" Israel for assassination of Hamas leader.',
				url: 'https://www.bbc.com/news/articles/cw5y5637eqdo',
				urlToImage:
					'https://ichef.bbci.co.uk/news/1024/branded_news/1d93/live/70204b70-5121-11ef-b852-13c9a919482c.jpg',
				publishedAt: '2024-08-02T23:36:59Z',
				content:
					'The United States will deploy additional warships and fighter jets to the Middle East to help defend Israel from possible attacks by Iran and its proxies, the Pentagon said.\r\nTensions remain high in … [+2448 chars]',
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'Fox News',
				title:
					'Aspirin may be linked to lower risk of colorectal cancer, new study suggests - Fox News',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMimAFBVV95cUxNQ0dNZFlrSHlQTmlUaVRrcDhKRXY0WVU4SVhuX1hxdG1neHRqS3REaC1RVGRHYjc3UEY3WjU1Ym8xYjduSl9PeDU3Mi1UTG43Sko1Z3IzNnAtaTlKREE4TG9aS284bjR2clNNOVRQS0FZVHJ1ZXZKY2xXTnpvdzBZcTRHVnZVSmJFZHVpa0JUMDMzTnZzX3dncNIBngFBVV95cUxQeS02Vy02QlZJYkhvcU42NVNvcDFBM0U4bG15VGdXN3JIc1FMazNlRmhydThlZWRHc2Q5T2lGdGpwdjhRWUdCSlJ4R0lzVW9TSTJpTlFMVVhOMUpVRktobGRFN1ByZElCYllEajlxZi1mZmtlS2hueHNaRG43cHBTaEF0ZEhoNlducnFKT29SemR1dDlkVldmLVZlLWFSdw?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:35:00Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'NBC Sports',
				title:
					"Jean-Phillipe Mateta's goal enough for France to win 1-0 over Argentina in Olympic QF | NBC Sports - NBC Sports",
				description: null,
				url: 'https://news.google.com/rss/articles/CCAiC2doSFhJQlZRem13mAEB?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:19:12Z',
				content: null,
			},
			{
				source: {
					id: 'google-news',
					name: 'Google News',
				},
				author: 'New York Post ',
				title:
					'Aerosmith retires from touring, says Steven Tyler’s voice can’t recover from injury - New York Post ',
				description: null,
				url: 'https://news.google.com/rss/articles/CBMiswFBVV95cUxQbkRHRVNBY0pCbWxJbjlFMzJ2c1FMelRkZnJIYTB2d1AxTmV6bXN0TF9rckN4S2lIYnZNR3d6dlZzSHFRaXh5SUphTjIxQWhVdWZPQk5IUjhkRGRQaURIdXU5YzVsVTRXVHdGbHdvVUtlSnB1LTQ5bnBYX0tDdUV1dDZMNF9yRkxHVXFwejk1bm5CQm1USUpxLVlOeTBFWHozWEE0RUEwOThFelRSczhrcEZrcw?oc=5',
				urlToImage: null,
				publishedAt: '2024-08-02T23:09:00Z',
				content: null,
			},
		],
	};
}
