import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

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
		'inline-flex items-center justify-center rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer';

	const sizes = {
		default:
			'px-4 py-3.5 sm:px-8 sm:py-4 font-medium text-sm sm:text-base hover:-translate-y-0.5',
		sm: 'px-6 py-2 text-sm font-semibold',
	};

	const variants = {
		solid: 'bg-gray-900 text-white dark:bg-white dark:text-gray-900',
		subtle: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white',
		outline:
			'bg-transparent text-gray-900 border border-gray-300 dark:text-white dark:border-gray-700',
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
