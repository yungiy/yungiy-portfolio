export default function SkillsPage() {
	return (
		<section id='skills' className='py-32 px-6 bg-gray-50 dark:bg-gray-900/20'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-3xl md:text-4xl font-semibold mb-12'>Skiils</h2>
				<div className='flex flex-wrap justify-center gap-3'>
					{[
						'React',
						'Next.js',
						'TypeScript',
						'Tailwind CSS',
						'Node.js',
						'Git',
					].map((skill) => (
						<span
							key={skill}
							className='px-5 py-2.5 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700/50'
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
