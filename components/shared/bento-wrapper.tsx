import { cn } from '@/lib/utils';
import { BentoWrapperProps } from '@/types';

const BentoWrapper = ({
	children,
	element: Element = 'section',
	className,
}: BentoWrapperProps) => {
	return (
		<Element
			className={cn('bg-primary-200 rounded-[10px] text-white p-6 ', {
				[`${className}`]: className,
			})}
		>
			{children}
		</Element>
	);
};

export default BentoWrapper;
