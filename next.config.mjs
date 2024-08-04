/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['geoip-lite'],
	},
};

export default nextConfig;
