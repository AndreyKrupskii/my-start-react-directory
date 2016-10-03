import React from 'react';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';
import configStore from './../../client/store';

import App from './../../client/components/App.component';

const	store	=	configStore(); 

const componetHtml = ReactDom.renderToString(
	<Provider	store={store}>				
		<App/>		
	</Provider>
);

module.exports = componetHtml;