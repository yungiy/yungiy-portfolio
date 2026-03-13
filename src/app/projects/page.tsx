export default function ProjectPage() {
	return (
		<section id='projects' className='py-32 px-6 max-w-6xl mx-auto'>
			<h2 className='text-3xl md:text-5xl font-semibold mb-16 text-center'>
				Selected Projects
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{/* Project Card Example 1 */}
				<div className='group relative bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden aspect-4/3 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500'>
					<div className='absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 group-hover:scale-105 transition-transform duration-700'>
						{/* <Image src="/project1.png" alt="Project 1" fill className="object-cover" /> */}
						<span className='text-lg'>Project Image Placeholder</span>
					</div>
					<div className='absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/90 via-black/50 to-transparent'>
						<h3 className='text-2xl font-bold text-white mb-2'>Project Name</h3>
						<p className='text-gray-300 text-sm'>
							프로젝트에 대한 간략한 설명을 이곳에 작성합니다.
						</p>
					</div>
				</div>
				{/* Project Card Example 2 */}
				<div className='group relative bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden aspect-4/3 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500'>
					<div className='absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 group-hover:scale-105 transition-transform duration-700'>
						<span className='text-lg'>Project Image Placeholder</span>
					</div>
					<div className='absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/90 via-black/50 to-transparent'>
						<h3 className='text-2xl font-bold text-white mb-2'>
							Another Project
						</h3>
						<p className='text-gray-300 text-sm'>
							프로젝트에 대한 간략한 설명을 이곳에 작성합니다.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
