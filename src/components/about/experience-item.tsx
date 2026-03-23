import React from 'react';

interface ExperienceItemProps {
	company: string;
	role: string;
	period: string;
	descriptions: string[];
}

export function ExperienceItem({
	company,
	role,
	period,
	descriptions,
}: ExperienceItemProps) {
	return (
		<div className='relative pl-6 md:pl-10'>
			<div className='absolute w-4 h-4 bg-blue-500 rounded-full -left-2.25 top-8 md:top-10 ring-4 ring-white dark:ring-black' />
			<div className='p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-md dark:hover:bg-white/10 transition-all duration-300'>
				<div className='flex flex-col md:flex-row md:items-center justify-between mb-4'>
					<div>
						<h4 className='text-xl font-bold text-gray-900 dark:text-white'>
							{company}
						</h4>
						<span className='text-blue-600 dark:text-blue-400 font-medium mt-1 inline-block'>
							[{role}]
						</span>
					</div>
					<span className='text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0 font-medium'>
						{period}
					</span>
				</div>
				<ul className='space-y-2 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed break-keep mt-4'>
					{descriptions.map((desc, index) => (
						<li key={index} className='flex gap-2.5'>
							<span className='text-blue-500 mt-0.5'>•</span>
							<span>{desc}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
