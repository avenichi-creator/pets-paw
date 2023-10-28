import React from 'react';
import { useAppDispatch } from 'shared/lib/store';
import { useWindowSize } from 'shared/lib/window-size';
import { handleUploadOpen } from 'shared/store/upload/reducer';
import { TextButton } from 'shared/ui/buttons';
import { Icon } from 'shared/ui/icon';
import './styles.scss';

export function OpenUploadButton() {
	const { width } = useWindowSize();

	const ButtonContent = (
		<>
			<Icon iconVariant="upload" />
			<span>{width > 425 ? 'Upload Photo' : 'UPLOAD'}</span>
		</>
	);

	const dispatch = useAppDispatch();

	return (
		<TextButton
			className="open-upload-button"
			defaultContent={ButtonContent}
			onClick={() => dispatch(handleUploadOpen())}
		/>
	);
}
