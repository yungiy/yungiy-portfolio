import { useEffect } from 'react';
import type { Demo } from './project-card';

interface MediaModalProps {
	media: Demo | null;
	onClose: () => void;
}

export function MediaModal({ media, onClose }: MediaModalProps) {
	useEffect(() => {
		if (!media) return;
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [media, onClose]);

	if (!media) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm'>
			<button type='button' aria-label='자료 뷰어 닫기' className='absolute inset-0 cursor-default' onClick={onClose} />
			<div
				role='dialog'
				aria-modal='true'
				aria-label={media.label}
				className='relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-b-3xl rounded-t-xl bg-white shadow-2xl dark:bg-gray-800'
			>
				{/* 상단 닫기 버튼 영역 (미디어와 겹치지 않게 분리) */}
				<div className='flex justify-end items-center px-3 py-2 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 z-20'>
					<button
						type='button'
						onClick={onClose}
						aria-label='자료 닫기'
						className='p-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors focus:outline-none'
					>
						<svg
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-4 h-4 text-gray-600 dark:text-gray-300'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>

				{/* 미디어 콘텐츠 영역 */}
				<div className='flex-1 relative bg-gray-50 dark:bg-black'>
					{media.isPdf ? (
						<iframe
							src={`${media.url}#toolbar=0&navpanes=0&scrollbar=0`}
							className='absolute inset-0 w-full h-full border-none bg-white'
							title={media.label}
						/>
					) : media.isVideo ? (
						// biome-ignore lint/a11y/useMediaCaption: 기존 시연 영상에 제공된 자막 파일이 없습니다.
						<video
							src={media.url}
							controls
							autoPlay
							playsInline
							className='absolute inset-0 w-full h-full object-contain bg-black'
						/>
					) : null}
				</div>
			</div>
		</div>
	);
}
