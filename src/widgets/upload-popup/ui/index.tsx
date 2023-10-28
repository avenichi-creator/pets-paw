import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { RootState } from 'shared/store/store';
import { handleUploadClose } from 'shared/store/upload/reducer';
import { Dropzone } from 'shared/ui/dropzone';
import { Popup } from 'shared/ui/popup';
import { uploadImage } from '../lib';
import './styles.scss';
import { UploadFileButton } from './upload-file-button';
import { UploadResultMessage } from './upload-result-message';

export function UploadPopup() {
	const dispatch = useAppDispatch();

	const isPopupOpen = useAppSelector((state: RootState) => state.uploadReducer.isOpen);

	const [file, setFile] = useState<File | null>(null);
	const [isUploading, setIsUploading] = useState(false);
	const [isUploadSuccess, setIsUploadSuccess] = useState(false);
	const [isMessageVisible, setIsMessageVisible] = useState(false);

	const handleDrop = (acceptedFiles: File[]) => setFile(acceptedFiles[0]);
	const handleUpload = async () => {
		if (!file) return;

		setIsUploading(true);
		setIsMessageVisible(false);
		setIsUploadSuccess(
			await uploadImage(file, () => {
				setIsUploading(false);
				setIsMessageVisible(true);
			}),
		);
	};

	return (
		<Popup
			className="upload-popup"
			isOpen={isPopupOpen}
			onClose={() => dispatch(handleUploadClose())}
		>
			<div className="upload-popup-disclaimer">
				<h1>Upload a .jpg or .png Cat Image</h1>
				<h2>
					Any uploads must comply with the{' '}
					<Link to={'https://thecatapi.com/privacy'}>upload guidelines</Link> or face deletion.
				</h2>
			</div>
			<div className="upload-popup-dropzone">
				<Dropzone onDrop={handleDrop} />
				<span className="upload-popup-file-name">
					{file ? `Image File Name: ${file.name}` : 'No file selected'}
				</span>
				<UploadResultMessage isUploadSuccess={isUploadSuccess} isVisible={isMessageVisible} />
				<UploadFileButton file={file} isUploading={isUploading} onClick={handleUpload} />
			</div>
		</Popup>
	);
}
