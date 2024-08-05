import { headers } from 'next/headers';
import geoip from 'geoip-lite';
import { countryLanguageMap } from './country-language-map';
import { log } from 'console';

export function getPreferredLanguage() {
	const defaultLanguage = { code: 'en', name: 'English' };
	let ip = IP();

	let preferredLanguage = defaultLanguage;

	if (ip) {
		const geo = geoip.lookup(ip);
		if (geo && geo.country) {
			preferredLanguage =
				countryLanguageMap[geo.country] || defaultLanguage;
		}
	}
	console.log(preferredLanguage);

	return preferredLanguage;
}

export function IP() {
	const FALLBACK_IP_ADDRESS = '0.0.0.0';
	const forwardedFor = headers().get('x-forwarded-for');

	if (forwardedFor) {
		return (
			forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
		);
	}

	return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
}
