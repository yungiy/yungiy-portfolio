import { ExperienceItem } from '@/src/components/about/experience-item';
import { SectionHeading } from '@/src/components/layout/section-heading';

const experiences = [
	{
		company: '인피닉',
		role: 'OTA 기능 검증 및 테스트 자동화',
		period: '재직 중',
		descriptions: [
			'Test Case 기반 OTA 기능 검증 및 Quick, Full, Acceptance Test 수행과 결과 보고',
			'CAN 통신 및 DLT·CAN 로그 분석을 통한 ECU·DCU 통신 검증, Defect 재현과 원인 분석',
			'테스트 자동화 스크립트 개발 및 시험 결과 자동 수집',
			'CR(Change Request) 검증과 변경점 분석 및 원청 협업',
		],
	},
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
		<section id='about' className='page-shell page-section'>
			<SectionHeading
				number='01'
				title='Experience'
				description='차량 OTA 기능과 전장부품 EOL 검사를 경험했습니다. 테스트 케이스, 통신 로그, 계측 데이터를 바탕으로 문제를 재현하고 원인을 분석합니다.'
			/>
			<div className='divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800'>
				{experiences.map((experience) => <ExperienceItem key={experience.company} {...experience} />)}
			</div>
		</section>
	);
}
