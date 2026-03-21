import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'yungiy | 포트폴리오 사이트',
	description: '양윤기의 포트폴리오 사이트입니다.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ko'>
			<body
				className={`${notoSansKr.className} antialiased bg-white text-black dark:bg-black dark:text-white selection:bg-gray-200 dark:selection:bg-gray-800 transition-colors duration-300`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
