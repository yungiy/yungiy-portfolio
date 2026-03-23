import React from 'react';

interface Props {
	name: string;
	icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

export function SkillCard({ name, icon: Icon }: Props) {
	return (
		<div className='w-64 md:w-44 md:h-48 p-5 md:p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-md dark:hover:bg-white/10 transition-all duration-300 flex flex-row md:flex-col items-center md:justify-center gap-4 md:gap-5'>
			<div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/10 flex items-center justify-center text-2xl md:text-3xl text-gray-700 dark:text-gray-200 shrink-0'>
				<Icon />
			</div>
			<h4 className='text-base md:text-lg font-bold text-gray-900 dark:text-white text-left md:text-center w-full md:w-auto'>
				{name}
			</h4>
		</div>
	);
}
