import type { Metadata } from 'next';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
	title: '양윤기 | 차량 SW 검증 엔지니어',
	description: 'OTA 기능 검증, CAN·DLT 로그 분석, 전장부품 EOL 검사 경험을 소개하는 양윤기의 포트폴리오입니다.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ko'>
			<body className='antialiased bg-white text-black dark:bg-black dark:text-white selection:bg-gray-200 dark:selection:bg-gray-800 transition-colors duration-300'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
