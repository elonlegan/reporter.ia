'use client';

import { News } from '@/src/components/news';
import { getData } from '@/lib/data';
import { Article } from '@/lib/types';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loading } from '../components/loading/loading';

export default function Home() {
	const searchParams = useSearchParams();
	const [summary, setSummary] = useState<string>('');
	const [news, setNews] = useState<Article[]>([]);

	useEffect(() => {
		const params = {
			search: searchParams?.get('search'),
		};

		axios
			.get('/api/news', {
				params,
			})
			.then((res) => res.data)
			.then(({ summary, news }) => {
				setSummary(summary);
				setNews(news);
			});
	}, [searchParams]);

	return summary && news ? (
		<News summary={summary} news={news} />
	) : (
		<Loading />
	);
}
