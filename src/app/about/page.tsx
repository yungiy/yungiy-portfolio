import { Button } from '@/src/components/layout/button';
import { CompetenceCard } from '@/src/components/about/competence-card';
import { ExperienceItem } from '@/src/components/about/experience-item';

const competences = [
	{
		icon: '⚡',
		title: 'EOL & Hot Testing',
		descriptions: [
			'생산 및 검사 라인에서 핫테스트(Hot Test)와 EOL(End of Line) 테스트를 수행하며 전장부품의 실동작 상태를 검증해본 경험이 있습니다.',
			'C#, C++, LabVIEW를 활용해 MDPS, iMEB 등 전장부품 검사장비의 계측·제어 SW를 다뤄보았습니다.',
		],
	},
	{
		icon: '📡',
		title: 'Vehicle Protocols',
		descriptions: [
			'CAN 통신 기반의 ECU 신호 계측과 UDS, XCP 프로토콜을 활용한 차량 제어·진단 로직을 다뤄보았습니다.',
			'모터 다이나모 및 시험설비 환경에서 제어기와 전장부품 간의 신호 흐름과 통신 상태를 검증했습니다.',
		],
	},
	{
		icon: '🏭',
		title: 'PLC & Automation',
		descriptions: [
			'PLC 및 각종 계측기·제어기 연동을 통해 검사 라인의 자동검사 로직을 다루고 현장 설비 인터페이스를 경험했습니다.',
			'라인 운용 과정에서 발생하는 하드웨어 동작 오류와 신호 예외 상황을 디버깅해본 경험이 있습니다.',
		],
	},
	{
		icon: '🔍',
		title: 'OS & Troubleshooting',
		descriptions: [
			'Linux 환경에서 로우레벨 프로그램을 다루며 시스템과 네트워크 제어의 동작 구조를 접해보았습니다.',
			'테스트 및 QA 경험을 바탕으로, 검사 라인에서 발생하는 소프트웨어 및 제어·통신 오류의 원인을 체계적으로 추적합니다.',
		],
	},
];

const experiences = [
	{
		company: '신호시스템',
		role: 'EOL 계측 SW 개발 및 테스트',
		period: '2026.04 ~ 2026.07 (4개월)',
		descriptions: [
			'LabVIEW, C# 기반 iMEB, MDPS 전장부품 EOL 라인검사장비 계측, 제어 SW 개발 및 테스트',
			'CAN 통신 기반 ECU 신호 계측 및 UDS, XCP 프로토콜을 활용한 차량 제어, 진단 기능 구현',
			'PLC 및 계측기·제어기 연동을 통한 생산라인 자동검사 로직 구현 및 설비 디버깅',
			'모터 다이나모 및 전장 시험설비를 활용한 MDPS 기능검사와 측정 데이터 분석 경험',
		],
	},
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
					{/* 중단: 역량 소개 요약 */}
					<div className='w-full max-w-3xl text-center space-y-6 mb-16'>
						<p className='text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed break-keep tracking-tight'>
							&quot;다양한 직무 경험을 바탕으로,{' '}
							<br className='hidden md:block' />
							팀에 자연스럽게 녹아드는 SW 엔지니어입니다.&quot;
						</p>
						<p className='text-gray-600 dark:text-gray-400 leading-loose break-keep text-base md:text-lg tracking-tight'>
							핫테스트·EOL 검사와 PM/QA, 인프라 경험을 통해 현장의 전체적인
							흐름을 접해보았습니다. <br className='hidden sm:block' />
							이러한 경험을 바탕으로 현장 설비 및 제어 신호에 대한 이해를
							넓히고, 하드웨어와 소프트웨어 간 예외 상황을 체계적으로 추적하여
							시스템의 안정성을 높이는 개발을 지향합니다.
						</p>
						<div className='pt-4'>
							<Button
								href='/resume.pdf'
								target='_blank'
								rel='noreferrer'
								variant='blue'
							>
								이력서 보기
							</Button>
						</div>
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
