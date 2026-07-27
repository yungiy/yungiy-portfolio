import { ReactNode } from 'react';

type Skill = {
	name: string;
	description?: string;
};

type SkillCategoryProps = {
	title: string;
	skills: Skill[];
};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
	<div className='flex flex-col md:flex-row mb-12'>
		<div className='w-full md:w-1/4 mb-4 md:mb-0'>
			<h3 className='text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200'>
				{title}
			</h3>
		</div>
		<div className='w-full md:w-3/4'>
			<div className='flex flex-wrap gap-2'>
				{skills.map((skill) => (
					<span
						key={skill.name}
						className='bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700'
					>
						{skill.name}
					</span>
				))}
			</div>
		</div>
	</div>
);

const frontendSkills: Skill[] = [
	{ name: 'JavaScript' },
	{ name: 'TypeScript' },
	{ name: 'React' },
	{ name: 'Next.js' },
	{ name: 'Tailwind CSS' },
	{ name: 'Redux' },
];

const embeddedSkills: Skill[] = [
	{ name: 'C' },
	{ name: 'C#' },
	{ name: 'Embedded Systems' },
	{ name: 'CAN 통신' },
	{ name: 'LabVIEW' },
	{ name: '계측제어/전장 시스템' },
	{ name: 'Linux' },
	{ name: 'TCP/IP' },
];

const collaborationTools: Skill[] = [
	{ name: 'Git' },
	{ name: 'GitHub' },
	{ name: 'VS Code' },
	{ name: 'Figma' },
	{ name: 'Notion' },
	{ name: 'Microsoft Office' },
];

export default function SkillsPage() {
	return (
		<section id='skills' className='py-32 px-6 max-w-5xl mx-auto'>
			<div className='text-center mb-20'>
				<h2 className='text-3xl md:text-5xl font-semibold mb-4 tracking-tight'>
					Skills
				</h2>
				<p className='text-gray-500 dark:text-gray-400 text-sm md:text-base'>
					웹 프론트엔드부터 임베디드 시스템까지, 다양한 분야의 기술 스택을
					보유하고 있습니다.
				</p>
			</div>
			<div className='max-w-4xl mx-auto'>
				<SkillCategory title='Frontend' skills={frontendSkills} />
				<SkillCategory title='Embedded & System' skills={embeddedSkills} />
				<SkillCategory
					title='Collaboration Tools'
					skills={collaborationTools}
				/>
			</div>
		</section>
	);
}
