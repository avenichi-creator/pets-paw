import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from 'shared/store/store';

export function withStore(child: () => ReactNode) {
	return <Provider store={store}>{child()}</Provider>;
}
