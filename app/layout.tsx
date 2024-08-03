import type { Metadata } from 'next';
import { Inter, Crimson_Pro } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Header } from '@/components/header/header';
import { Container } from '@/components/container/container';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'reporter.ia',
	description: 'tu reporte para estar al día',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<body className={(inter.className, 'bg-[#f8f3eb]')}>
				<Container>
					<Header />
					<main>{children}</main>
				</Container>
			</body>
		</html>
	);
}
