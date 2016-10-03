import mongoose from './../libs/mongoose';
import crypto from 'crypto';

const Schema = mongoose.Schema;

let userSchema = new Schema({
	username: {
		type: String,
		unique: true, 
		required: true
	},
	hashedPassword: {
		type: String,
		required: true
	},
	salt: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

userSchema.methods.encryptPassword = function(password){
	return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};
userSchema.methods.checkPassword = function(password){
	return this.encryptPassword(password) === this.hashedPassword;
}
userSchema.virtual('password')
.set(function(password){
	this._plainPassword = password;
	this.salt = Math.random() + '';
	this.hashedPassword = this.encryptPassword(password);
})
.get(function(){
	return this._plainPassword;
});

module.exports = mongoose.model('User', userSchema);