import type { ReactNode } from 'react';

type SectionHeadingProps = {
	number: string;
	title: string;
	description: string;
	action?: ReactNode;
};

export function SectionHeading({ number, title, description, action }: SectionHeadingProps) {
	return (
		<div className='section-heading'>
			<div className='min-w-0'>
				<div className='mb-4 flex items-center gap-4'>
					<span aria-hidden='true' className='section-number'>{number}</span>
					<h2 className='section-title'>{title}</h2>
				</div>
				<p className='section-description'>{description}</p>
			</div>
			{action && <div className='shrink-0'>{action}</div>}
		</div>
	);
}
