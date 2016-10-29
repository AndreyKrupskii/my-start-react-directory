import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from	'react-redux';

import configStore from './store';
import routes from './routes';

const	store	=	configStore();

ReactDOM.render( 
	<Provider	store={store}>		 
		{routes}
	</Provider>, 
	document.getElementById('react-view')
);  

    