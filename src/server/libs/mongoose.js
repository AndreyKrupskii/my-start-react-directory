import mongoose from 'mongoose';
import config from './../../config';

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;