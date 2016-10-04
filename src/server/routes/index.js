import renderHTML from './../libs/renderHTML';
import logger from './../libs/log';


const log = logger(module);

module.exports = function(req, res, next) {
	const redux = require('./../libs/getComponentHTML');
	const componentHtml = redux.componentHtml;
	const preloadedState = redux.preloadedState; 

	const elementHTML = renderHTML(componentHtml, preloadedState);
	res.end(elementHTML);
};