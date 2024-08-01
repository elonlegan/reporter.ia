import { News } from '@/components/news';
import { getData } from '@/lib/data';

export default async function SearchPage({
	params: { search },
}: {
	params: { search: string };
}) {
	const { summary, news } = await getData(search);

	return <News summary={summary} news={news} />;
}
