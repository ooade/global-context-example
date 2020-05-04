import React from 'react';
import { useSelector, useDispatch } from './hooks';
import { addCount, reduceCount } from './actions/count';

import './App.css';

function App() {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch('count');

	return (
		<div className="App">
			A Simple Counter!
			<br />
			<button onClick={() => dispatch(addCount())}> Add </button> {count}
			<button onClick={() => dispatch(reduceCount())}> Reduce </button>
		</div>
	);
}

export default App;
