import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 

import App from './../components/App.component';
import Lol from './../components/lol'; 
import NextLol from './../components/lolnext';

export default (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Lol}/>
			<Route path='nextlol' component={NextLol} />
		</Route> 
	</Router>
)

