import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles.scss';

interface DropzoneProps {
	className?: string;
	onDrop: (files: File[]) => void;
}

export function Dropzone(props: DropzoneProps) {
	const { className, onDrop } = props;

	const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
		onDrop,
		accept: {
			'iamge/jpeg': ['.jpg'],
			'image/png': ['.png'],
		},
		maxFiles: 1,
	});

	useEffect(() => {
		onDrop(acceptedFiles);
	}, []);

	return (
		<div {...getRootProps({ className: clsx('dropzone', { active: isDragActive }, className) })}>
			<div className="dropzine-content-wrapper">
				<div className="dropzone-bg-image" />
				<div className="dropzone-bg-color" />
				{acceptedFiles[0] ? (
					<div className="dropzone-image-wrapper">
						<img src={URL.createObjectURL(acceptedFiles[0])} alt="upload" />
					</div>
				) : (
					<div className="dropzone-info">
						<span className="dropzone-text">
							<strong>Drag here</strong> your file or <strong>Click here</strong> to upload
						</span>
					</div>
				)}
			</div>
			<input {...getInputProps({ className: 'dropzone-input' })} />
		</div>
	);
}
