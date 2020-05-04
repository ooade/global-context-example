import React, { useEffect } from 'react';
import { useSelector, useDispatch } from './hooks';
import { fetchUsers } from './actions/users';

const Users = () => {
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch('users');

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	console.log(users);

	return (
		<div className="Users">
			{users.status === 'fetching' && <div> Fetching Users... </div>}
			{users.status === 'fetched' &&
				users.data.map((user) => {
					return (
						<p key={user.id}>
							{user.name} ~
							<span style={{ color: '#808080' }}>
								<small>{user.email}</small>
							</span>
						</p>
					);
				})}
		</div>
	);
};

export default Users;
