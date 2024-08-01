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

		return data;
	} catch (error: any) {
		console.log(error);
		throw new Error(error);
	}
}
