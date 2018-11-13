const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var alumniSchema = new Schema({
  firstname: { type: String},
  lastname :{ type: String, },
  username :{ type: String, },
  password: { type: String, },
  about:{ type: String },
  college: {type: String},
  gender:{ type: String, },
  contactNo:{ type: Number, },
  email:{ type: String, },
  country:{ type: String, },
  city:{ type: String, },
  expertise: []
});

alumniSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

alumniSchema.pre('save', function (next) {
  console.log("Process before saving")
	if (!this.password) {
		console.log('models/alumnus.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/alumnus.js hashPassword in pre save');

		this.password = this.hashPassword(this.password)
		next()
	}
})


var alumniModel = mongoose.model('alumnus', alumniSchema);
module.exports = alumniModel;
