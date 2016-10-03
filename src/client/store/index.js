import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';

export default function configStore() {
	const logger = createLogger();
	
	const store = createStore(
		rootReducer, 
		applyMiddleware(thunk, logger)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}