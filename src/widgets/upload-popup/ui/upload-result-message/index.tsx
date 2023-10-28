import clsx from 'clsx';
import React from 'react';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

interface UploadResultMessageProps {
	isUploadSuccess: boolean;
	isVisible: boolean;
}

export function UploadResultMessage(props: UploadResultMessageProps) {
	const { isUploadSuccess, isVisible } = props;

	return (
		<>
			{isVisible && (
				<div
					className={clsx(
						'upload-popup-result-message',
						{ success: isUploadSuccess },
						{ error: !isUploadSuccess },
					)}
				>
					{isUploadSuccess && (
						<p>
							<Icon iconVariant="success" />
							<span>Upload success</span>
						</p>
					)}
					{!isUploadSuccess && (
						<p>
							<Icon iconVariant="error" />
							<span>Upload failed</span>
						</p>
					)}
				</div>
			)}
		</>
	);
}
