/*
	********************************
	Application dependencies
	********************************
*/
import config from './../config'

import express  from 'express';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import path from 'path';

import session from './libs/sessions';
import logger from './libs/log.js';
import HttpError from './libs/HTTPError';
import bodyParser from 'body-parser';

import indexRoute from './routes';
/*
	******************************
	Application init
	********************************
*/
const app = express();
const log = logger(module);

// Application uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session);
app.use(express.static(path.join(__dirname, './../../public')));
app.use(favicon(path.join(__dirname, './../../public', 'favicon.ico')));

app.use(indexRoute);


// Not found error handler
// app.use(function(req, res, next) {
// 	var status = 404;
// 	var message = 'I have some troubles with looking for your request. I\'m so sorry =(';
// 	var err = new HttpError(status, message);
// 	next(err);
// });

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
// 	res.status(err.status || 500);
// 	if(res.req.headers['x-requested-with'] == 'XMLHttpRequest'){
// 		res.json(err);
// 	} else{
// 		// Will send error page
// 		log.info(err)
// 		res.json(err);
// 	}
// });

// Set application port
const port = process.env.PORT || config.get('port');
app.listen(port, () => {
	log.info(`Server listening on: ${port}`);
});