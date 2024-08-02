import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

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
			<body className={inter.className}>
				<nav className='flex justify-around py-4 border-b mb-8'>
					<Link className='text-lg font-semibold' href='/'>
						gameName
					</Link>
				</nav>
				<main className='pt-6'>{children}</main>
			</body>
		</html>
	);
}
