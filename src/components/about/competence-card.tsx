import React from 'react';

interface CompetenceCardProps {
	icon: React.ReactNode;
	title: string;
	descriptions: string[];
}

export function CompetenceCard({
	icon,
	title,
	descriptions,
}: CompetenceCardProps) {
	return (
		<div className='p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-md dark:hover:bg-white/10 transition-all duration-300'>
			<div className='flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400'>
				<div className='w-10 h-10 rounded-full bg-blue-100/50 dark:bg-blue-500/20 flex items-center justify-center text-xl'>
					{icon}
				</div>
				<h4 className='text-lg font-bold text-gray-900 dark:text-white'>
					{title}
				</h4>
			</div>
			<ul className='space-y-2.5 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed break-keep'>
				{descriptions.map((desc, index) => (
					<li key={index} className='flex gap-2.5'>
						<span className='text-blue-500 mt-0.5'>•</span>
						<span>{desc}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
