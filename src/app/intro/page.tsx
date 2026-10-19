import { Button } from '@/src/components/layout/button';

export default function IntroPage() {
	return (
		<section
			id='intro'
			className='page-shell relative flex min-h-[78svh] scroll-mt-14 flex-col items-start justify-center overflow-hidden py-20 text-left md:py-28'
		>
			<div aria-hidden='true' className='pointer-events-none absolute -right-32 top-4 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl md:h-[34rem] md:w-[34rem] dark:bg-blue-950/30' />
			<p className='relative mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300'>
				<span aria-hidden='true' className='h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400' />
				재직 중 · 차량 SW 검증 엔지니어
			</p>
			<h1 className='relative max-w-4xl text-3xl font-bold leading-tight tracking-tight text-gray-900 break-keep sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white'>
				차량의 신호를 읽고,
				<br />
				<span className='text-blue-600 dark:text-blue-400'>검증으로 신뢰성을 높입니다.</span>
			</h1>
			<p className='relative mt-8 max-w-2xl text-base leading-8 text-gray-600 break-keep md:text-lg dark:text-gray-400'>
				OTA 기능 검증과 전장부품 EOL 검사 경험을 갖춘 SW 엔지니어 양윤기입니다.
				{' '}CAN·DLT 로그로 오류를 추적하고, 반복 시험을 자동화합니다.
			</p>
			<div className='relative mt-10 flex flex-wrap gap-3'>
				<Button href='/#about' variant='blue'>
					경력 보기
				</Button>
				<Button href='/#skills' variant='outline'>
					기술 경험 보기
				</Button>
			</div>
			<div className='relative mt-16 grid w-full gap-3 border-t border-gray-200 pt-6 sm:grid-cols-3 dark:border-gray-800'>
				{[
					['01', 'OTA 기능 검증', '테스트 케이스 기반 기능 확인'],
					['02', '통신·로그 분석', 'CAN·DLT 로그로 오류 추적'],
					['03', '테스트 자동화', '반복 시험과 결과 수집 자동화'],
				].map(([number, title, description]) => (
					<div key={number} className='py-2 sm:pr-6'>
						<p className='font-mono text-xs text-blue-600 dark:text-blue-400'>{number}</p>
						<h2 className='mt-2 text-base font-semibold text-gray-900 dark:text-white'>{title}</h2>
						<p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>{description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
