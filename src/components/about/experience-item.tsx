interface ExperienceItemProps {
	company: string;
	role: string;
	period?: string;
	descriptions: string[];
}

export function ExperienceItem({ company, role, period, descriptions }: ExperienceItemProps) {
	return (
		<article className='grid gap-6 py-8 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-10 md:py-10'>
			<div>
				<h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{company}</h3>
				<p className='mt-2 text-sm font-medium leading-relaxed text-blue-600 break-keep dark:text-blue-400'>{role}</p>
				{period && <p className='mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400'>{period}</p>}
			</div>
			<ul className='list-disc space-y-3 pl-4 text-sm leading-7 text-gray-600 break-keep marker:text-blue-500 md:text-base dark:text-gray-400'>
				{descriptions.map((description) => <li key={description}>{description}</li>)}
			</ul>
		</article>
	);
}
