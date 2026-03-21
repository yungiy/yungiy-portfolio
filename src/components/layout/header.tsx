'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
	const [darkMode, setDarkMode] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('intro');

	useEffect(() => {
		const isDark = localStorage.getItem('theme') === 'dark';
		setDarkMode(isDark);
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		const handleScroll = () => {
			const sections = ['intro', 'about', 'skills', 'projects', 'contact'];
			const scrollY = window.scrollY;
			const offset = 150;

			// 페이지 끝에 도달했을 때 contact 활성화 (마지막 섹션이 짧을 경우를 대비)
			if (
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 50
			) {
				setActiveSection('contact');
				return;
			}

			let current = '';

			for (const id of sections) {
				const element = document.getElementById(id);
				if (element && element.offsetTop <= scrollY + offset) {
					current = id;
				}
			}

			setActiveSection(current || 'intro');
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // 초기 로드 시 실행

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleTheme = () => {
		const newMode = !darkMode;
		setDarkMode(newMode);
		if (newMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-lg border-black/5 dark:border-white/10 transition-all duration-300'>
			<div className='max-w-6xl mx-auto px-6 h-14 flex items-center justify-between'>
				<Link
					href='/'
					className='text-black dark:text-white font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity'
				>
					Yungiy
				</Link>

				{/* Desktop Navigation */}

				<nav className='hidden md:flex items-center gap-8 text-xs font-medium text-gray-600 dark:text-gray-300'>
					<Link
						href='#intro'
						className={`transition-all px-3 py-1 rounded-full ${
							activeSection === 'intro'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'hover:text-black dark:hover:text-white'
						}`}
					>
						Intro
					</Link>
					<Link
						href='#about'
						className={`transition-all px-3 py-1 rounded-full ${
							activeSection === 'about'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'hover:text-black dark:hover:text-white'
						}`}
					>
						About
					</Link>
					<Link
						href='#skills'
						className={`transition-all px-3 py-1 rounded-full ${
							activeSection === 'skills'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'hover:text-black dark:hover:text-white'
						}`}
					>
						Skills
					</Link>
					<Link
						href='#projects'
						className={`transition-all px-3 py-1 rounded-full ${
							activeSection === 'projects'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'hover:text-black dark:hover:text-white'
						}`}
					>
						Projects
					</Link>

					<Link
						href='#contact'
						className={`transition-all px-3 py-1 rounded-full ${
							activeSection === 'contact'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'hover:text-black dark:hover:text-white'
						}`}
					>
						Contact
					</Link>
					<button
						onClick={toggleTheme}
						className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
						aria-label='Toggle Dark Mode'
					>
						{darkMode ? (
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
						) : (
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
						)}
					</button>
				</nav>

				{/* Mobile Navigation Controls */}
				<div className='flex items-center gap-4 md:hidden'>
					<button
						onClick={toggleTheme}
						className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
						aria-label='Toggle Dark Mode'
					>
						{darkMode ? (
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
						) : (
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
						)}
					</button>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className='p-2 -mr-2 text-gray-600 dark:text-gray-300'
						aria-label='Toggle Menu'
					>
						{isMenuOpen ? (
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
						) : (
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
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMenuOpen && (
				<div className='md:hidden absolute top-14 left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-5 duration-200'>
					<Link
						href='#intro'
						onClick={() => setIsMenuOpen(false)}
						className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
							activeSection === 'intro'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white'
						}`}
					>
						Intro
					</Link>
					<Link
						href='#about'
						onClick={() => setIsMenuOpen(false)}
						className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
							activeSection === 'about'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white'
						}`}
					>
						About
					</Link>
					<Link
						href='#skills'
						onClick={() => setIsMenuOpen(false)}
						className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
							activeSection === 'skills'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white'
						}`}
					>
						Skills
					</Link>
					<Link
						href='#projects'
						onClick={() => setIsMenuOpen(false)}
						className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
							activeSection === 'projects'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white'
						}`}
					>
						Projects
					</Link>

					<Link
						href='#contact'
						onClick={() => setIsMenuOpen(false)}
						className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
							activeSection === 'contact'
								? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold'
								: 'text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white'
						}`}
					>
						Contact
					</Link>
				</div>
			)}
		</header>
	);
}
