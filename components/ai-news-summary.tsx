import { CardContent, Card } from '@/components/ui/card';

export async function AINewsSummary({
	summary,
}: {
	summary: string;
}) {
	return (
		<Card className='w-full max-w-prose p-10 grid gap-10'>
			<CardContent className='p-0 grid gap-4'>
				<p className='text-sm leading-relaxed text-gray-300'>
					{summary}
				</p>
			</CardContent>
		</Card>
	);
}
