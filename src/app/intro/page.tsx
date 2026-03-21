export default function IntroPage() {
	return (
		<section
			id='intro'
			className='flex flex-col items-center justify-center min-h-[90vh] text-center px-4'
		>
			<h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-linear-to-b from-black to-gray-500 dark:from-white dark:to-gray-500 text-transparent bg-clip-text'>
				Passion. Action. Result.
			</h1>
			<p className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed break-keep'>
				다양한 직무 경험을 바탕으로, <br className='md:hidden' />
				프로덕트의 완성도와 안정적인 성장을 지탱하는
				<br className='md:hidden' /> 개발자 양윤기입니다.
			</p>
		</section>
	);
}
