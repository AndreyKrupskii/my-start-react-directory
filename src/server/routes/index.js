import express from 'express';

import renderHTML from './../libs/renderHTML';
import logger from './../libs/log';

const router = express.Router();
const log = logger(module);

router.get('/', function(req, res, next) {
	const componentHTML = require('./../libs/getComponentHTML');
	const elementHTML = renderHTML(componentHTML);
	res.end(elementHTML);
});

module.exports = router;