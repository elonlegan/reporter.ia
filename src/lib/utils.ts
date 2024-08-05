import { headers } from 'next/headers';
import geoip from 'geoip-lite';
import { countryLanguageMap } from './country-language-map';

export function getPreferredLanguage() {
	const defaultLanguage = { code: 'en', name: 'English' };
	const headersList = headers();
	let ip =
		headersList.get('x-forwarded-for') ||
		headersList.get('remote-addr') ||
		'127.0.0.1';
	// Convert ::1 (IPv6 localhost) to 127.0.0.1 (IPv4 localhost)
	ip = ip === '::1' ? '127.0.0.1' : ip;

	let preferredLanguage = defaultLanguage;

	if (ip) {
		const geo = geoip.lookup(ip);
		if (geo && geo.country) {
			preferredLanguage =
				countryLanguageMap[geo.country] || defaultLanguage;
		}
	}

	return preferredLanguage;
}
