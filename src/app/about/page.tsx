import { CompetenceCard } from '@/src/components/about/competence-card';
import { ExperienceItem } from '@/src/components/about/experience-item';

const competences = [
	{
		icon: '💻',
		title: 'Frontend Development',
		descriptions: [
			'React와 Next.js 생태계를 활용하여 안정적이고 반응형인 웹 사용자 인터페이스를 구축합니다.',
			'재사용 가능하고 유지보수하기 좋은 컴포넌트를 설계하여 장기적인 생산성 향상을 지향합니다.',
		],
	},
	{
		icon: '🤝',
		title: 'Collaboration & Quality',
		descriptions: [
			'인프라 엔지니어 및 PM/QA 인턴 경험을 통해 기획부터 배포까지 서비스의 전체 라이프사이클을 이해합니다.',
			'요구사항의 본질을 파악하고 기획/디자인 직군과 원활하게 소통하며, 꼼꼼한 테스트로 프로덕트 완성도를 높입니다.',
		],
	},
];

const experiences = [
	{
		company: '하몬소프트',
		role: '네트워크망 구축',
		period: '2024.12 (1개월)',
		descriptions: [
			'보안관제 솔루션을 서비스하는 회사로 개발팀 업무를 보조',
			'각 사이트마다 있는 전산망 정리 및 신규 사이트 전산망 구축 보조',
			'리눅스 기반으로 각종 로우 레벨 프로그램을 활용',
		],
	},
	{
		company: '모노브레인',
		role: 'PM, QA 경험',
		period: '2024.05 ~ 2024.07 (3개월)',
		descriptions: [
			'html CSS, React를 활용해 전자교과서를 개발하는 회사',
			'프로젝트 단위로 각 고객사와 미팅 후 프로젝트 매니징 업무 보조 및 문서관리',
			'피그마, 엑셀을 활용한 QA 경험 및 OA 경험',
		],
	},
	{
		company: '비주얼샤워',
		role: '웹 개발 경험',
		period: '2022.04 ~ 2022.07 (3개월)',
		descriptions: [
			'타입스크립트와 리액트를 기반으로 암호화폐 플랫폼 개발',
			'MUI를 통한 CSS 스타일링 및 퍼블리싱 경험, Redux를 통한 전역상태관리 경험',
			'php 기반 코드 이그나이터를 활용한 백엔드 개발 경험 및 자사 홈페이지 구조 개선 방안 도출',
		],
	},
];

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
						{competences.map((comp, index) => (
							<CompetenceCard key={index} {...comp} />
						))}
					</div>

					{/* 하단: 경력 (Work Experience) */}
					<div className='w-full max-w-4xl mt-24 text-left'>
						<h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center'>
							직무경험
						</h3>
						<div className='relative border-l-2 border-gray-100 dark:border-white/10 ml-4 md:ml-6 space-y-8 md:space-y-12 py-2'>
							{experiences.map((exp, index) => (
								<ExperienceItem key={index} {...exp} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
