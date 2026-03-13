export default function ContetctPage() {
	return (
		<section id='contact' className='py-32 px-6 text-center'>
			<h2 className='text-4xl md:text-5xl font-semibold mb-8'>
				Let's work together
			</h2>
			<p className='text-gray-600 dark:text-gray-400 mb-10 text-lg'>
				새로운 프로젝트나 협업에 대해 이야기하고 싶으신가요?
			</p>
			<a
				href='mailto:example@email.com'
				className='inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors'
			>
				Contact Me
			</a>
		</section>
	);
}
