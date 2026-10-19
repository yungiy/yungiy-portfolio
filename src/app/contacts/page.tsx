import { ContactActions } from '@/src/components/contacts/contact-actions';
import { SectionHeading } from '@/src/components/layout/section-heading';

export default function ContactPage() {
	const email = 'jnj4522@naver.com';

	return (
		<section id='contact' className='page-shell page-section'>
			<SectionHeading number='04' title='Contact' description='차량 SW 검증과 테스트 자동화에 관한 협업 및 채용 문의를 기다립니다.' />
			<div className='grid gap-10 border-y border-gray-200 py-10 md:grid-cols-2 md:gap-12 dark:border-gray-800'>
				<div>
					<p className='flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400'>
						<span aria-hidden='true' className='h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400' />
						현재 재직 중입니다.
					</p>
					<p className='mt-5 max-w-lg text-lg leading-8 text-gray-600 break-keep md:text-md dark:text-gray-200'>
						OTA 기능 검증, 로그 분석, 전장부품 검사 경험을 바탕으로 문제를 함께 해결하는 SW 엔지니어 양윤기입니다.
					</p>
				</div>
				<div className='min-w-0'>
					<p className='font-mono text-xs tracking-wider text-gray-500 dark:text-gray-400'>EMAIL</p>
					<a href={`mailto:${email}`} className='mt-2 inline-block text-lg font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-600 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-500 dark:text-white dark:decoration-gray-600 dark:hover:text-gray-300 sm:text-xl'>
						{email}
					</a>
					<div className='mt-7'>
						<ContactActions email={email} />
					</div>
				</div>
			</div>
		</section>
	);
}
