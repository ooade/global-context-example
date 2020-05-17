import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from './hooks';
import reducers from './reducers';

const initialState = {
	count: 0,
	users: {
		status: 'idle',
		data: [],
	},
};

ReactDOM.render(
	<Provider reducers={reducers} initialState={initialState}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
