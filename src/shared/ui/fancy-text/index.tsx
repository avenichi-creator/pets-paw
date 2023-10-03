import React from 'react';
import './styles.scss';

interface FancyTextProps {
	text: string;
}

export function FancyText(props: FancyTextProps) {
	const { text } = props;

	return <h1 className="fancy-text">{text}</h1>;
}
