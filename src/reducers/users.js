const users = (state, action) => {
	switch (action.type) {
		case 'FETCHING_USERS':
			return { ...state, status: 'fetching' };
		case 'FETCHED_USERS':
			return { ...state, status: 'fetched', data: action.payload };
		default:
			return state;
	}
};

export default users;
