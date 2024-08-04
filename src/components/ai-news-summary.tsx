export function AINewsSummary({
	summary,
}: {
	summary: string;
}) {
	return (
		<div className='flex flex-wrap w-full h-full'>
			<p className='w-11/12 first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none  text-justify'>
				{summary}
			</p>
			<div className='bg-black w-1 h-11/12 rounded ml-4' />
			<div className='bg-black w-full h-1 rounded my-3' />
		</div>
	);
}
