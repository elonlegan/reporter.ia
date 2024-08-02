import axios from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function getCountryInfo() {
	try {
		const ipApiURL = `https://ipapi.co/json/`;

		const { data } = await axios.get(ipApiURL);

		data.language = data.languages.split('-')[0];

		return data;
	} catch (error: any) {
		console.log(error);
		return { language: 'es' };
	}
}
