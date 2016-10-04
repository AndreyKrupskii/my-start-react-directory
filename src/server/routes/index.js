import logger from './../libs/log';
import waterfall from 'async/waterfall';

import React from 'react';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './../../client/reducers';
import App from './../../client/components/App.component';

const log = logger(module);

module.exports = function(req, res, next) {
	waterfall(
		[
			isAuth, 
			getState, 
			createReactComponent, 
			renderHTML
		], 
		function(err, result){
			if(err) {
				log.error(err);
				result = 'lol'
			}
			res.end(result);
		}
	)


function isAuth(callback){
	const haveSession = req.session.isAuth;
	callback(null, haveSession);
}

function getState(haveSession, callback){
	const state = {
		name: 'Server Charly'
	}
	callback(null, state);
}

function createReactComponent(state, callback){
	const	store	=	createStore(rootReducer, state); 
	const preloadedState = store.getState();

	const componentHtml = ReactDom.renderToString(
			<Provider	store={store}>				
				<App/>		
			</Provider>
		);

	
	callback(null, componentHtml, preloadedState)
}

function renderHTML(componentHtml, preloadedState, callback){
	const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:9999/public' : '.';
	const indexHtml = `
		<!DOCTYPE html>
			<html>
			<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Hello React</title>
					<link rel="stylesheet" href="${assetUrl}/assets/styles.css">
			</head>
			<body>
				<div id="react-view">${componentHtml}</div>
				<script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
				<script type="application/javascript" src="${assetUrl}/assets/bundle.js"></script>
			</body>
		</html>
	`;
	callback(null, indexHtml);
}

};