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
				className='relative w-full max-w-5xl h-[90vh] bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Modal Header */}
				<div className='absolute top-4 right-4 z-10'>
					<button
						onClick={onClose}
						className='p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 text-gray-800 dark:text-white'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>

				{/* Media Content */}
				{media.isPdf ? (
					<iframe
						src={`${media.url}#toolbar=0&navpanes=0`}
						className='w-full h-full border-none bg-white'
						title='PDF Viewer'
					/>
				) : media.isVideo ? (
					<video
						src={media.url}
						controls
						autoPlay
						className='w-full h-full object-contain bg-black'
					/>
				) : null}
			</div>
		</div>
	);
}
