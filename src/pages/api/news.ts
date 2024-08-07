import { NextApiRequest, NextApiResponse } from 'next';
import { getData } from '@/src/lib/data';
import { Data } from '@/src/lib/types';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.query.search instanceof Array) {
		res.status(400).end();
		return;
	}
	const data = await getData(req.query.search || '');

	res.status(200).json(data);
}
