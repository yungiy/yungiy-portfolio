import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'solid' | 'subtle' | 'outline' | 'blue' | 'white' | 'dark';
type ButtonSize = 'default' | 'sm';

type BaseProps = {
	variant?: ButtonVariant;
	size?: ButtonSize;
	className?: string;
};

// button 태그로 사용할 때의 Props
type ButtonAsButton = BaseProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
		href?: never;
	};

// a 태그로 사용할 때의 Props
type ButtonAsLink = BaseProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
		href: string;
	};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
	variant = 'solid',
	size = 'default',
	className = '',
	...props
}: ButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center gap-2 rounded-xl whitespace-nowrap cursor-pointer text-sm font-medium tracking-tight transition-[background-color,border-color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black';

	const sizes = {
		default: 'min-h-12 px-5',
		sm: 'min-h-10 px-4',
	};

	const variants = {
		solid: 'bg-gray-900 text-white dark:bg-white dark:text-gray-900',
		subtle: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white',
		outline:
			'border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900',
		blue: 'bg-blue-600 text-white hover:bg-blue-700',
		white: 'bg-white text-black hover:bg-gray-200',
		dark: 'bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600',
	};

	const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

	if (props.href) {
		return (
			<a
				className={classes}
				{...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
			/>
		);
	}

	return (
		<button
			className={classes}
			{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
		/>
	);
}
