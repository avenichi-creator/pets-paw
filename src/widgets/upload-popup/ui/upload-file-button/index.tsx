import React from 'react';
import { TextButton } from 'shared/ui/buttons';
import { uploadImage } from 'widgets/upload-popup/lib';
import './styles.scss';

interface UploadFileButtonProps {
	file: File | null;
	isUploading: boolean;
	onClick: () => void;
}

export function UploadFileButton(props: UploadFileButtonProps) {
	const { file, isUploading, onClick } = props;

	return (
		<>
			{file && (
				<TextButton
					isLoading={isUploading}
					className="upload-popup-upload-button"
					defaultContent={<span>UPLOAD PHOTO</span>}
					onClick={onClick}
				/>
			)}
		</>
	);
}
