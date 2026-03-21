'use client';

import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

interface Props {
	name: string;
	icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

export function SkillCard({ name, icon: Icon }: Props) {
	return (
		<motion.div
			variants={itemVariants}
			className='group relative w-64 p-4 bg-white/50 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm flex flex-row items-center transition-all duration-300 md:w-44 md:h-48 md:p-6 md:flex-col md:justify-center hover:shadow-xl hover:bg-white dark:hover:bg-gray-800 hover:-translate-y-1'
		>
			<div className='absolute inset-0 from-gray-50/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity' />

			<div className='relative z-10 shrink-0 mr-4 text-4xl text-gray-600 dark:text-gray-400 transition-all duration-300 md:mr-0 md:mb-5 group-hover:scale-110 group-hover:text-black dark:group-hover:text-white'>
				<Icon />
			</div>
			<h4 className='relative z-10 text-lg font-semibold text-left text-gray-600 md:text-center dark:text-gray-400 transition-colors duration-300 group-hover:text-black dark:group-hover:text-white'>
				{name}
			</h4>
		</motion.div>
	);
}
