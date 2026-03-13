export default function AboutPage() {
	return (
		<section className='flex flex-col items-center justify-center min-h-[90vh] text-center px-4'>
			<h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-linear-to-b from-black to-gray-500 dark:from-white dark:to-gray-500 text-transparent bg-clip-text'>
				Innovate. Create. Solve.
			</h1>
			<p className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed'>
				사용자 경험을 최우선으로 생각하는
				<br className='md:hidden' /> 개발자 양윤기입니다.
			</p>
		</section>
	);
}
