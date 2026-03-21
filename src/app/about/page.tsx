export default function AboutPage() {
	return (
		<section id='about' className='py-32 px-6 bg-white dark:bg-gray-900/20'>
			<div className='max-w-4xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-semibold mb-12 text-center'>
					About Me
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					<div className='w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto flex items-center justify-center'>
						<span className='text-gray-500 dark:text-gray-400'>Your Photo</span>
					</div>
					<div className='text-center md:text-left'>
						<p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
							여기에 자신에 대한 소개글을 작성해주세요.
							<br />
							예시: 저는 새로운 기술을 배우고 적용하는 것을 즐기는 프론트엔드
							개발자입니다.
							<br />
							사용자에게 최고의 경험을 제공하기 위해 항상 고민합니다.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
