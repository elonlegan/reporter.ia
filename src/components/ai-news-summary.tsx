export function AINewsSummary({
	summary,
}: {
	summary: string;
}) {
	return (
		<div className='col-span-8'>
			<p className='first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:-mt-3'>
				{summary}
			</p>
		</div>
	);
}
