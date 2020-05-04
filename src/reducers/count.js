const count = (state, action) => {
	switch (action.type) {
		case 'INCREMENT_COUNT':
			return state + 1;
		case 'DECREMENT_COUNT':
			return state - 1;
		default:
			return state;
	}
};

export default count;
