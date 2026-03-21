export default function AboutPage() {
	return (
		<section id='about' className='py-32 px-6'>
			<div className='max-w-5xl mx-auto'>
				{/* 섹션 헤더 */}
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
						About Me
					</h2>
				</div>

				<div className='flex flex-col items-center'>
					{/* 상단: 프로필 이미지 및 이름 */}
					<div className='flex flex-col items-center text-center mb-12'>
						<div className='relative group'>
							<div className='relative w-56 h-56 md:w-72 md:h-72 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden border-4 border-white dark:border-black shadow-lg'>
								{/* 실제 이미지를 넣으실 때는 <img src="..." alt="양윤기 프로필" /> 로 교체하세요 */}
								<div className='w-full h-full flex items-center justify-center text-gray-400'>
									Your Photo
								</div>
							</div>
						</div>
						<div className='mt-8'>
							<h3 className='text-3xl font-bold text-gray-900 dark:text-white'>
								양윤기
							</h3>
						</div>
					</div>

					{/* 중단: 역량 소개 요약 */}
					<div className='w-full max-w-3xl text-center space-y-6 mb-16'>
						<p className='text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 leading-snug break-keep'>
							&quot;다양한 직무 경험을 바탕으로,{' '}
							<br className='hidden md:block' />
							팀에 자연스럽게 녹아드는 프론트엔드 개발자입니다.&quot;
						</p>
						<p className='text-gray-600 dark:text-gray-400 leading-relaxed break-keep text-base md:text-lg'>
							인프라 엔지니어와 PM/QA 인턴으로 일하며 서비스가 기획, 배포되는
							전체 과정을 경험했습니다. 이러한 경험을 바탕으로 다른 직무의
							동료들과 원활하게 소통하며, 단순한 화면 구현을 넘어 비즈니스
							요구사항과 시스템의 안정성까지 함께 고민하는 개발을 지향합니다.
						</p>
					</div>

					{/* 하단: 핵심 역량 그리드 - 2열 배치 */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left'>
						<div className='p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-md dark:hover:bg-white/10 transition-all duration-300'>
							<div className='flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400'>
								<div className='w-10 h-10 rounded-full bg-blue-100/50 dark:bg-blue-500/20 flex items-center justify-center text-xl'>
									💻
								</div>
								<h4 className='text-lg font-bold text-gray-900 dark:text-white'>
									Frontend Development
								</h4>
							</div>
							<ul className='space-y-2.5 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed break-keep'>
								<li className='flex gap-2.5'>
									<span className='text-blue-500 mt-0.5'>•</span>
									<span>
										React와 Next.js 생태계를 활용하여 안정적이고 반응형인 웹
										사용자 인터페이스를 구축합니다.
									</span>
								</li>
								<li className='flex gap-2.5'>
									<span className='text-blue-500 mt-0.5'>•</span>
									<span>
										재사용 가능하고 유지보수하기 좋은 컴포넌트를 설계하여
										장기적인 생산성 향상을 지향합니다.
									</span>
								</li>
							</ul>
						</div>

						<div className='p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-md dark:hover:bg-white/10 transition-all duration-300'>
							<div className='flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400'>
								<div className='w-10 h-10 rounded-full bg-blue-100/50 dark:bg-blue-500/20 flex items-center justify-center text-xl'>
									🤝
								</div>
								<h4 className='text-lg font-bold text-gray-900 dark:text-white'>
									Collaboration & Quality
								</h4>
							</div>
							<ul className='space-y-2.5 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed break-keep'>
								<li className='flex gap-2.5'>
									<span className='text-blue-500 mt-0.5'>•</span>
									<span>
										인프라 엔지니어 및 PM/QA 인턴 경험을 통해 기획부터 배포까지
										서비스의 전체 라이프사이클을 이해합니다.
									</span>
								</li>
								<li className='flex gap-2.5'>
									<span className='text-blue-500 mt-0.5'>•</span>
									<span>
										요구사항의 본질을 파악하고 기획/디자인 직군과 원활하게
										소통하며, 꼼꼼한 테스트로 프로덕트 완성도를 높입니다.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
