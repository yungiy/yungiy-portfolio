'use client';

import { useState, useEffect } from 'react';

export function useTypingEffect(
	text: string,
	typingSpeed: number = 100,
	deletingSpeed: number = 50,
	pauseDuration: number = 2000,
) {
	const [displayedText, setDisplayedText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(
			() => {
				if (!isDeleting && displayedText.length < text.length) {
					setDisplayedText(text.slice(0, displayedText.length + 1));
				} else if (isDeleting && displayedText.length > 0) {
					setDisplayedText(text.slice(0, displayedText.length - 1));
				} else if (!isDeleting && displayedText.length === text.length) {
					setIsDeleting(true);
				} else if (isDeleting && displayedText.length === 0) {
					setIsDeleting(false);
				}
			},
			!isDeleting && displayedText.length === text.length
				? pauseDuration
				: isDeleting && displayedText.length === 0
					? pauseDuration / 4
					: isDeleting
						? deletingSpeed
						: typingSpeed,
		);

		return () => clearTimeout(timeout);
	}, [
		displayedText,
		isDeleting,
		text,
		typingSpeed,
		deletingSpeed,
		pauseDuration,
	]);

	return displayedText;
}
