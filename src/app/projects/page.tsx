'use client';

import { MediaModal } from '@/src/components/projects/media-modal';
import {
	Demo,
	ProjectCard,
	Project,
} from '@/src/components/projects/project-card';

import { useState } from 'react';

const projects: Project[] = [
	{
		title: 'Nito',
		description: '최저가 알림 플랫폼 웹 어플리케이션입니다.',
		image: '/nito.png',
		githubUrl: 'https://github.com/Nito-90z/Nito-Frontend',
		demos: [
			{
				label: '니토 발표자료',
				url: '/nito-ppt.pdf',
				isPdf: true,
			},
		],
	},
	{
		title: 'Ordly',
		description:
			'QR 기반 테이블 오더 서비스입니다. 사장님용, 손님용 모두 구현했습니다',
		image: '/orldy.jpeg',
		githubUrl: 'https://github.com/yungiy/Ordly',
		demos: [
			{ label: 'Admin', url: '/admin-demo.mov', isVideo: true },
			{ label: 'Consumer', url: '/consumer-demo.mov', isVideo: true },
		],
	},
];

export default function ProjectPage() {
	const [selectedMedia, setSelectedMedia] = useState<Demo | null>(null);

	return (
		<section id='projects' className='py-32 px-6 max-w-6xl mx-auto'>
			<h2 className='text-3xl md:text-5xl font-semibold mb-16 text-center'>
				Projects
			</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						project={project}
						onSelectMedia={setSelectedMedia}
					/>
				))}
			</div>

			<MediaModal
				media={selectedMedia}
				onClose={() => setSelectedMedia(null)}
			/>
		</section>
	);
}
