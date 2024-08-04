import type { Metadata } from 'next';
import { Crimson_Pro, Lato } from 'next/font/google';
import './globals.css';
import { Header } from '@/src/components/header/header';
import { Container } from '@/src/components/container/container';

export const metadata: Metadata = {
	title: 'reporter.ia',
	description: 'tu reporte para estar al día',
};

const lato = Lato({
	subsets: ['latin'],
	variable: '--font-lato',
	weight: ['100', '300', '400', '700', '900'],
});

const crimsom = Crimson_Pro({
	subsets: ['latin'],
	variable: '--font-crimsom',
	weight: ['200', '300', '400', '500', '600', '700', '900'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<body
				className={`${lato.variable} ${crimsom.variable} font-lato bg-[#f8f3eb]`}
			>
				<Container>
					<Header />
					<main>{children}</main>
				</Container>
			</body>
		</html>
	);
}
