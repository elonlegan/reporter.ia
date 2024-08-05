import { getData } from '@/src/lib/data';
import { News } from '@/src/components/news';

export default async function SearchPage({ params }) {
	const { summary, news } = await getData(params.search);
	return <News summary={summary} news={news} />;
}
