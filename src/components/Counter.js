import React from 'react';

import { useSelector, useDispatch } from '../hooks';
import { addCount, reduceCount } from '../actions/count';

const Counter = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch('count');

	return (
		<>
			A Simple Counter!
			<br />
			<button onClick={() => dispatch(addCount())}> Add </button> {count}
			<button onClick={() => dispatch(reduceCount())}> Reduce </button>
		</>
	);
};

export default Counter;
