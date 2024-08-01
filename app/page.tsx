import { News } from '@/components/news';
import { getData } from '@/lib/data';

export default async function Home() {
	const { summary, news } = await getData();

	return <News summary={summary} news={news} />;
}
