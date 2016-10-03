import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from	'react-redux';

import configStore from './store';
import App from './components/App.component';

const	store	=	configStore();


ReactDOM.render( 
	<Provider	store={store}>				
		<App/>		
	</Provider>, 
	document.getElementById('react-view')
);  

  