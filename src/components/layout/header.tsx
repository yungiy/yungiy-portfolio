'use client';

import { useActiveSection } from '@/src/app/hooks/use-active-section';
import { useTheme } from '@/src/app/hooks/use-theme';
import Link from 'next/link';
import { useState } from 'react';

// 네비게이션 데이터 상수화
const NAV_ITEMS = [
	{ id: 'intro', label: 'Intro' },
	{ id: 'about', label: 'About' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'contact', label: 'Contact' },
];
const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const activeSection = useActiveSection(SECTION_IDS);
	const { theme, toggleTheme, mounted } = useTheme();

	// 공통 스타일 및 테마 아이콘 정의
	const getNavLinkClass = (id: string, isMobile = false) => {
		const baseClass = isMobile
			? 'text-lg font-medium px-4 py-2 rounded-lg'
			: 'px-3 py-1 rounded-full';
		const activeClass =
			'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold';
		const inactiveClass =
			'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white';

		return `transition-all ${baseClass} ${activeSection === id ? activeClass : inactiveClass}`;
	};

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-lg border-b border-black/5 dark:border-white/10 transition-all duration-300'>
			<div className='max-w-6xl mx-auto px-6 h-14 flex items-center justify-between'>
				<Link
					href='/'
					className='text-black dark:text-white font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity'
				>
					Yungiy
				</Link>

				{/* 데스크탑 네비게이션 */}
				<nav className='hidden md:flex items-center gap-6 text-xs font-medium'>
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.id}
							href={`#${item.id}`}
							className={getNavLinkClass(item.id)}
						>
							{item.label}
						</Link>
					))}
					<ThemeToggleButton
						theme={theme}
						mounted={mounted}
						toggleTheme={toggleTheme}
					/>
				</nav>

				{/* 모바일 네비게이션 컨트롤 */}
				<div className='flex items-center gap-4 md:hidden'>
					<ThemeToggleButton
						theme={theme}
						mounted={mounted}
						toggleTheme={toggleTheme}
					/>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className='p-2 -mr-2 text-gray-600 dark:text-gray-300'
						aria-label='Toggle Menu'
					>
						{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
			</div>

			{/* 모바일 메뉴 드롭다운 */}
			{isMenuOpen && (
				<div className='md:hidden absolute top-14 left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5 duration-200'>
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.id}
							href={`#${item.id}`}
							onClick={() => setIsMenuOpen(false)}
							className={getNavLinkClass(item.id, true)}
						>
							{item.label}
						</Link>
					))}
				</div>
			)}
		</header>
	);
}

// --- 보조 컴포넌트 (아이콘 및 버튼 분리) ---

function ThemeToggleButton({ theme, mounted, toggleTheme }: any) {
	return (
		<button
			onClick={toggleTheme}
			className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
			aria-label='Toggle Dark Mode'
		>
			{mounted ? (
				theme === 'dark' ? (
					<SunIcon />
				) : (
					<MoonIcon />
				)
			) : (
				<div className='w-5 h-5' />
			)}
		</button>
	);
}

const SunIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-5 h-5'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
		/>
	</svg>
);

const MoonIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-5 h-5'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
		/>
	</svg>
);

const MenuIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-6 h-6'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
		/>
	</svg>
);

const CloseIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-6 h-6'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M6 18L18 6M6 6l12 12'
		/>
	</svg>
);
