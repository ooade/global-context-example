export const fetchUsers = () => {
	return async (dispatch) => {
		dispatch({ type: 'FETCHING_USERS' });

		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();

		dispatch({ type: 'FETCHED_USERS', payload: data });
	};
};
