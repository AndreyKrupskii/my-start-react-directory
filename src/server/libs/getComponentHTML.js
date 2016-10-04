import React from 'react';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';

import App from './../../client/components/App.component';

const init = {
	name: 'server Charly'
}

const	store	=	configStore(init); 
const preloadedState = store.getState();

const componetHtml = ReactDom.renderToString(
	<Provider	store={store}>				
		<App/>		
	</Provider>
);

exports.componentHtml = componetHtml;
exports.preloadedState = preloadedState;


import { createStore } from 'redux';
import rootReducer from './../../client/reducers';

function configStore(init) {
	const store = createStore(
		rootReducer,
		init
	);
	return store
}