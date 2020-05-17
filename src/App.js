import React from 'react';
import Users from './components/Users';
import Counter from './components/Counter';

import './App.css';

const App = () => {
	return (
		<div className="App">
			<Counter />
			<Users />
		</div>
	);
};

export default App;
