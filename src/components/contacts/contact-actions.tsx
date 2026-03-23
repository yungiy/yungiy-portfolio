'use client';

import { Button } from '@/src/components/layout/button';
import { useState } from 'react';
import { Toast } from '../layout/toast';

export function ContactActions() {
	const email = 'jnj4522@naver.com';
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
		} catch (error) {
			showToastMessage('이메일 복사가 안됐습니다.');
		}
	};

	return (
		<>
			<div className='grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto'>
				<Button
					href={`mailto:${email}`}
					className='col-span-1 w-full sm:w-auto'
					variant='blue'
				>
					이메일 보내기
				</Button>
				<Button
					onClick={handleCopyEmail}
					className='col-span-1 w-full sm:w-auto'
					variant='white'
				>
					이메일 복사하기
				</Button>
				<Button
					href='https://github.com/yungiy'
					target='_blank'
					rel='noreferrer'
					className='col-span-2 w-full sm:w-auto'
					variant='dark'
				>
					GitHub 보러가기
				</Button>
			</div>

			<Toast message={toastMessage} isVisible={showToast} />
		</>
	);
}
