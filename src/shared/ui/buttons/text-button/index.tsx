import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { LoadScreen } from 'shared/ui/load-screen';
import './styles.scss';

interface TextButtonProps {
	className?: string;
	isLoading?: boolean;
	defaultContent: ReactNode;
	loadingContent?: ReactNode;
	onClick: () => void;
}

export function TextButton(props: TextButtonProps) {
	const { className, isLoading = false, defaultContent, loadingContent, onClick } = props;

	return (
		<button onClick={onClick} className={clsx('text-button', className)}>
			<LoadScreen isActive={isLoading} type="white" />
			{isLoading && loadingContent ? loadingContent : defaultContent}
		</button>
	);
}
