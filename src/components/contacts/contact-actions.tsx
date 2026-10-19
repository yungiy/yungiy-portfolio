'use client';

import { Button } from '@/src/components/layout/button';
import { useState } from 'react';
import { Toast } from '../layout/toast';

export function ContactActions({ email }: { email: string }) {
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState('');

	const showToastMessage = (message: string) => {
		setToastMessage(message);
		setShowToast(true);
		setTimeout(() => setShowToast(false), 3000); // 3초 뒤에 사라짐
	};

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			showToastMessage('이메일 주소가 복사되었습니다.');
		} catch {
			showToastMessage('이메일 복사가 안됐습니다.');
		}
	};

	return (
		<>
			<div className='grid grid-cols-2 gap-3'>
				<Button
					href={`mailto:${email}`}
					className='col-span-2 w-full'
					variant='outline'
				>
					이메일 보내기
				</Button>
				<Button
					type='button'
					onClick={handleCopyEmail}
					className='w-full'
					variant='outline'
				>
					주소 복사
				</Button>
				<Button
					href='https://github.com/yungiy'
					target='_blank'
					rel='noopener noreferrer'
					className='w-full'
					variant='outline'
				>
					GitHub 보기
				</Button>
			</div>

			<Toast message={toastMessage} isVisible={showToast} />
		</>
	);
}
