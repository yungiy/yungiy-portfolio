import { SectionHeading } from '@/src/components/layout/section-heading';

type Skill = {
	name: string;
	description?: string;
};

type SkillCategoryProps = {
	title: string;
	skills: Skill[];
};

function SkillCategory({
	title,
	skills,
	index,
}: SkillCategoryProps & { index: number }) {
	const appliedSkills = skills.filter((skill) => skill.description);
	const otherSkills = skills.filter((skill) => !skill.description);
	const headingId = `skill-category-${index}`;

	return (
		<section
			aria-labelledby={headingId}
			className='grid gap-5 border-b border-gray-300 py-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8 md:py-10 dark:border-gray-700'
		>
			<div className='flex items-baseline gap-3 md:block'>
				<p
					aria-hidden='true'
					className='font-mono text-sm font-medium text-blue-600 md:mb-3 dark:text-blue-400'
				>
					{String(index + 1).padStart(2, '0')}
				</p>
				<h3
					id={headingId}
					className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'
				>
					{title}
				</h3>
			</div>
			<div className='min-w-0'>
				<dl className='divide-y divide-gray-100 dark:divide-gray-800'>
					{appliedSkills.map((skill) => (
						<div
							key={skill.name}
							className='grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6'
						>
							<dt className='text-base font-semibold leading-relaxed text-gray-900 break-keep dark:text-white'>
								{skill.name}
							</dt>
							<dd className='text-sm leading-relaxed text-gray-600 break-keep md:text-base dark:text-gray-400'>
								{skill.description}
							</dd>
						</div>
					))}
				</dl>
				{otherSkills.length > 0 && (
					<div className='mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-gray-100 pt-4 dark:border-gray-800'>
						<p className='text-xs font-medium text-gray-500 dark:text-gray-400'>
							사용 기술
						</p>
						<ul
							aria-label={`${title} 사용 기술`}
							className='flex flex-wrap gap-x-5 gap-y-2'
						>
							{otherSkills.map((skill) => (
								<li
									key={skill.name}
									className='text-sm font-semibold text-gray-700 dark:text-gray-300'
								>
									{skill.name}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</section>
	);
}
const skillCategories: SkillCategoryProps[] = [
	{
		title: '차량 통신·검증',
		skills: [
			{
				name: 'CAN · UDS · XCP',
				description: 'ECU 신호 계측 및 차량 제어·진단 기능 구현',
			},
			{
				name: 'Vector CANoe',
				description: 'CAN 메시지 모니터링, ECU·DCU 통신 검증 및 이상 신호 분석',
			},
			{
				name: 'OTA 기능 검증',
				description:
					'Test Case 기반 Quick·Full·Acceptance Test 수행 및 결과 보고',
			},
			{
				name: 'DLT · CAN Log',
				description: '로그 연계 분석으로 Defect 재현 및 장애 원인 추적',
			},
			{ name: 'CR 검증', description: '변경 요청 검증 및 변경점 분석' },
			{
				name: 'EOL 테스트',
				description: 'iMEB·MDPS 전장부품 기능검사 및 측정 데이터 분석',
			},
		],
	},
	{
		title: '언어',
		skills: [
			{
				name: 'Python',
				description: '테스트 자동화 스크립트 개발 및 시험 결과 자동 수집',
			},
			{
				name: 'C#',
				description: '전장부품 EOL 검사장비 계측·제어 SW 개발 및 테스트',
			},
			{ name: 'C' },
			{ name: 'JavaScript' },
			{ name: 'TypeScript' },
		],
	},
	{
		title: '시스템·도구',
		skills: [
			{
				name: 'Linux',
				description: '명령줄 도구를 활용한 로그 및 시스템 상태 분석',
			},
			{
				name: 'LabVIEW',
				description: 'EOL 라인검사장비 계측·제어 SW 개발 및 테스트',
			},
			{ name: 'Tera Term', description: 'Test Bench 환경에서 OTA 기능 검증' },
			{
				name: 'PLC',
				description: '계측기·제어기 연동 및 생산라인 자동검사 로직 구현',
			},
			{ name: 'Embedded Systems' },
			{ name: 'TCP/IP' },
			{ name: 'VS Code' },
		],
	},
	{
		title: '웹',
		skills: [
			{
				name: 'React · Next.js',
				description: 'Nito·Ordly 등 웹 서비스 화면 구현',
			},
			{ name: 'Redux', description: 'React 기반 플랫폼의 전역 상태 관리' },
			{ name: 'Tailwind CSS' },
		],
	},
	{
		title: '협업',
		skills: [
			{
				name: 'Jira · Confluence',
				description: '검증 과정의 이슈 관리 및 문서 관리',
			},
			{
				name: 'Figma · Microsoft Office',
				description: '전자교과서 QA 및 프로젝트 문서 관리',
			},
			{ name: 'Git' },
			{ name: 'GitHub' },
			{ name: 'Notion' },
		],
	},
];

export default function SkillsPage() {
	return (
		<section id='skills' className='page-shell page-section'>
			<SectionHeading number='03' title='Skills' description='차량 SW 검증에서 실제로 다룬 기술을 먼저, 웹 개발 경험을 이어서 정리했습니다.' />
			<div className='border-t-2 border-gray-900 dark:border-gray-200'>
				<div
					aria-hidden='true'
					className='hidden border-b border-gray-300 py-4 text-xs font-semibold tracking-wide text-gray-500 md:grid md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8 dark:border-gray-700 dark:text-gray-400'
				>
					<span>분류</span>
					<div className='grid grid-cols-[12rem_minmax(0,1fr)] gap-6'>
						<span>기술</span>
						<span>활용 경험</span>
					</div>
				</div>
				{skillCategories.map((category, index) => (
					<SkillCategory key={category.title} {...category} index={index} />
				))}
			</div>
		</section>
	);
}
