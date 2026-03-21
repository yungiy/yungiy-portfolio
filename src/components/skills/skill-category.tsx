'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from './skill-card';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

interface Props {
	title: string;
	skills: Array<{ name: string; icon: React.ComponentType<any> }>;
	className?: string;
}

export function SkillCategory({ title, skills, className = '' }: Props) {
	return (
		<div className={className}>
			<h3 className='text-2xl font-semibold mb-8 text-center'>{title}</h3>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='flex flex-wrap justify-center gap-6'
			>
				{skills.map((skill) => (
					<SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
				))}
			</motion.div>
		</div>
	);
}
