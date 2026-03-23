'use client';

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], offset: number = 150) {
	const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			// 하단 도달 체크
			const isAtBottom =
				window.innerHeight + scrollY >=
				document.documentElement.scrollHeight - 50;
			if (isAtBottom) {
				setActiveSection(sectionIds[sectionIds.length - 1]);
				return;
			}

			// 현재 섹션 찾기 (역순으로 체크하여 가장 위에 있는 활성 섹션 선택)
			const currentSection = [...sectionIds].reverse().find((id) => {
				const element = document.getElementById(id);
				return element && element.offsetTop <= scrollY + offset;
			});

			setActiveSection(currentSection || sectionIds[0]);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // 초기 로드 시 한 번 실행
		return () => window.removeEventListener('scroll', handleScroll);
	}, [sectionIds, offset]);

	return activeSection;
}
