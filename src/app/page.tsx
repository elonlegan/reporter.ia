import { News } from '@/src/components/news';
import { getData } from '@/lib/data';

export default async function Home({
	params,
	searchParams,
}) {
	const { summary, news } = await getData(
		searchParams.search
	);
	return <News summary={summary} news={news} />;
}
