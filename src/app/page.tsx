import AboutPage from './about/page';
import ContactPage from './contacts/page';
import IntroPage from './intro/page';
import ProjectPage from './projects/page';
import SkillsPage from './skills/page';

export default function Home() {
	return (
		<main className='pt-14'>
			{/* intro */}
			<IntroPage />
			{/* about */}
			<AboutPage />
			{/* skills */}
			<SkillsPage />
			{/* projects */}
			<ProjectPage />
			{/* contact */}
			<ContactPage />
		</main>
	);
}
