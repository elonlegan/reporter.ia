import { News } from '@/src/components/news';
import { getData } from '@/src/lib/data';

export default async function Home() {
	const { summary, news } = await getData();
	return <News summary={summary} news={news} />;
}
