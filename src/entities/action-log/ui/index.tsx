import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { logSelector } from 'shared/store/log/selectors';
import { fetchFullLogList } from 'shared/store/log/thunks';
import { ActionLogItem } from './action-log-item';
import './styles.scss';

export function ActionLog() {
	const dispatch = useAppDispatch();

	const actionLogs = useAppSelector(logSelector);

	useEffect(() => {
		dispatch(fetchFullLogList());
	}, []);

	return (
		<ul className="action-log">
			{actionLogs.map((item, index) => {
				return <ActionLogItem key={index} {...item} />;
			})}
		</ul>
	);
}
