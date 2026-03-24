import {
	JavaScriptIcon,
	TypeScriptIcon,
	ReactIcon,
	NextJsIcon,
	TailwindIcon,
	GitIcon,
	VsCodeIcon,
	GitHubIcon,
	FigmaIcon,
	NotionIcon,
} from '@/src/components/skills/icons';
import { SkillCategory } from '@/src/components/skills/skill-category';

const languages = [
	{
		name: 'JavaScript',
		icon: JavaScriptIcon,
	},
	{
		name: 'TypeScript',
		icon: TypeScriptIcon,
	},
];

const frameworks = [
	{
		name: 'React',
		icon: ReactIcon,
	},
	{
		name: 'Next.js',
		icon: NextJsIcon,
	},
	{
		name: 'Tailwind CSS',
		icon: TailwindIcon,
	},
];

const tools = [
	{
		name: 'Git',
		icon: GitIcon,
	},
	{
		name: 'Visual Studio Code',
		icon: VsCodeIcon,
	},
	{
		name: 'GitHub',
		icon: GitHubIcon,
	},
	{
		name: 'Figma',
		icon: FigmaIcon,
	},
	{
		name: 'Notion',
		icon: NotionIcon,
	},
];

export default function SkillsPage() {
	return (
		<section id='skills' className='py-32 px-6'>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-semibold mb-16 text-center'>
					Skills
				</h2>

				<SkillCategory title='언어' skills={languages} className='mb-16' />
				<SkillCategory
					title='프레임워크'
					skills={frameworks}
					className='mb-16'
				/>
				<SkillCategory title='개발 도구' skills={tools} />
			</div>
		</section>
	);
}
