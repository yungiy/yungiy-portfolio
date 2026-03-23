import React from 'react';
import { SkillCard } from './skill-card';

interface Props {
	title: string;
	skills: Array<{ name: string; icon: React.ComponentType<any> }>;
	className?: string;
}

export function SkillCategory({ title, skills, className = '' }: Props) {
	return (
		<div className={className}>
			<h3 className='text-2xl font-semibold mb-8 text-center'>{title}</h3>
			<div className='flex flex-wrap justify-center gap-6'>
				{skills.map((skill) => (
					<SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
				))}
			</div>
		</div>
	);
}
