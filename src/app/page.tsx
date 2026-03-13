import AboutPage from './about/page';
import ContetctPage from './contects/page';
import ProjectPage from './projects/page';
import SkillsPage from './skills/page';

export default function Home() {
	return (
		<main className='pt-14'>
			{/* about */}
			<AboutPage />
			{/* skills */}
			<SkillsPage />
			{/* projects */}
			<ProjectPage />
			{/* contect */}
			<ContetctPage />
		</main>
	);
}
