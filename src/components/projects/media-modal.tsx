import React from 'react';
import { Demo } from './project-card';

interface MediaModalProps {
	media: Demo | null;
	onClose: () => void;
}

export function MediaModal({ media, onClose }: MediaModalProps) {
	if (!media) return null;

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
			onClick={onClose}
		>
			<div
				className='relative w-full max-w-5xl h-[90vh] bg-white dark:bg-gray-800 rounded-b-3xl rounded-t-xl overflow-hidden shadow-2xl flex flex-col'
				onClick={(e) => e.stopPropagation()}
			>
				{/* 상단 닫기 버튼 영역 (미디어와 겹치지 않게 분리) */}
				<div className='flex justify-end items-center px-3 py-2 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 z-20'>
					<button
						onClick={onClose}
						className='p-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors focus:outline-none'
					>
						<svg
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
							title='PDF Viewer'
						/>
					) : media.isVideo ? (
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
