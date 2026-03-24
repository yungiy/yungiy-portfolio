import { ContactActions } from '@/src/components/contacts/contact-actions';

export default function ContactPage() {
	return (
		<section id='contact' className='py-32 px-6 relative'>
			<div className='max-w-3xl mx-auto text-center'>
				{/* 구직 상태 알림 뱃지 */}
				<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium mb-8 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700'>
					<span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
					<span>현재 적극적으로 구직 중입니다.</span>
				</div>

				<h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight'>
					Contact
				</h2>
				<p className='text-gray-600 dark:text-gray-400 mb-10 leading-loose break-keep text-base md:text-lg tracking-tight'>
					지속적으로 성장하며 팀에 긍정적인 에너지를 더할 준비가 된 신입 개발자
					양윤기입니다. <br className='hidden md:block' />
					커피 챗, 채용 문의, 코드 피드백 등 어떤 연락이든 기쁜 마음으로
					기다리고 있습니다!
				</p>
				<ContactActions />
			</div>
		</section>
	);
}
