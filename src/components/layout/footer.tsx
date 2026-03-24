export default function Footer() {
	return (
		<footer className='bg-gray-50 dark:bg-black dark:border-white/10 py-6 text-center text-gray-500 text-xs'>
			<div className='max-w-6xl mx-auto px-6'>
				<p>
					&copy; {new Date().getFullYear()} Yungiy Portfolio. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
