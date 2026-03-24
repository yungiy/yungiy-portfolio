'use client';

import { useState, useEffect } from 'react';

export function useTheme() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const isDark = document.documentElement.classList.contains('dark');
		setTheme(isDark ? 'dark' : 'light');
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);

		if (newTheme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};

	return { theme, toggleTheme, mounted };
}
