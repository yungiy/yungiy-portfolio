import Image from 'next/image';
import { Button } from '@/src/components/layout/button';

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
		<article className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950'>
			<div className='relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900'>
				<Image
					src={project.image}
					alt={`${project.title} 프로젝트 화면`}
					fill
					className='object-cover transition-transform duration-500 hover:scale-[1.03]'
					sizes='(max-width: 768px) 100vw, 50vw'
				/>
			</div>
			<div className='p-6 md:p-8'>
				<p className='mb-2 font-mono text-xs font-medium text-blue-600 dark:text-blue-400'>WEB PROJECT</p>
				<h3 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{project.title}</h3>
				<p className='mt-3 min-h-12 text-sm leading-6 text-gray-600 break-keep dark:text-gray-400'>{project.description}</p>
				<div className='mt-6 flex flex-wrap gap-2'>
					{project.demos.map((demo) => (
						<Button
							key={demo.label}
							onClick={() => onSelectMedia(demo)}
							variant='outline'
							size='sm'
						>
							{demo.label}
						</Button>
					))}
					<Button href={project.githubUrl} target='_blank' rel='noopener noreferrer' variant='blue' size='sm'>
						GitHub ↗
					</Button>
				</div>
			</div>
		</article>
	);
}
