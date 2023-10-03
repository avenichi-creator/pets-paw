import React from 'react';
import { ActionLog } from 'entities/action-log';
import { VotingBar } from 'features/voting';
import './styles.scss';

export function VotingWidget() {
	return (
		<div className="voting-widget">
			<VotingBar />
			<ActionLog />
		</div>
	);
}
