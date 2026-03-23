type ToastProps = {
	message: string;
	isVisible: boolean;
};

export function Toast({ message, isVisible }: ToastProps) {
	return (
		<div
			className={`fixed top-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-8 sm:translate-x-0 bg-gray-100 text-gray-800 border border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 px-6 py-4 rounded-xl transition-all z-50 font-medium whitespace-nowrap ${
				isVisible
					? 'translate-y-0 opacity-100'
					: '-translate-y-8 opacity-0 pointer-events-none'
			}`}
		>
			{message}
		</div>
	);
}
