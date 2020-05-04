import React, { useReducer, useContext } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

export const StateContext = createContext();
export const DispatchContext = React.createContext();

const Provider = ({ children, reducers, initialState = {} }) => {
	const combinedReducers = (state, action) => {
		if (!action.dispatchKey) {
			throw new Error('Please pass a key to useDispatch');
		}

		const currentReducerName = action.dispatchKey;
		const currentReducerFn = reducers[currentReducerName];
		const reducerState = state[currentReducerName];

		return {
			...state,
			[currentReducerName]: currentReducerFn(reducerState, action),
		};
	};

	const [state, dispatch] = useReducer(combinedReducers, initialState);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

const useSelector = (selector) => {
	return useContextSelector(StateContext, selector);
};

const useDispatch = (dispatchKey) => {
	const dispatchFn = useContext(DispatchContext);

	const dispatcher = (action) => {
		if (typeof action === 'function') {
			return action(dispatcher);
		}

		return dispatchFn({ ...action, dispatchKey });
	};

	return React.useCallback(dispatcher, []);
};

export { useSelector, useDispatch, Provider };
