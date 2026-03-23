import React from 'react';
import Image from 'next/image';

export interface Demo {
	label: string;
	url: string;
	isPdf?: boolean;
	isVideo?: boolean;
}

export interface Project {
	title: string;
	description: string;
	image: string;
	githubUrl: string;
	demos: Demo[];
}

interface ProjectCardProps {
	project: Project;
	onSelectMedia: (demo: Demo) => void;
}

export function ProjectCard({ project, onSelectMedia }: ProjectCardProps) {
	return (
		<div className='group relative bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden aspect-4/3 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500'>
			<div className='absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 group-hover:scale-105 transition-transform duration-700'>
				<Image
					src={project.image}
					alt={`${project.title} Project Thumbnail`}
					fill
					className='object-cover'
				/>
			</div>

			{/* Hover Overlay */}
			<div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20'>
				<a
					href={project.githubUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm'
				>
					GitHub
				</a>
				{project.demos.map((demo, index) => (
					<button
						key={index}
						onClick={() =>
							demo.isPdf || demo.isVideo
								? onSelectMedia(demo)
								: window.open(demo.url, '_blank')
						}
						className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-sm cursor-pointer'
					>
						{demo.label}
					</button>
				))}
			</div>

			<div className='absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none'>
				<h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
				<p className='text-gray-300 text-sm break-keep'>
					{project.description}
				</p>
			</div>
		</div>
	);
}
