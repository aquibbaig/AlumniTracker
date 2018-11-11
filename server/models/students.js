const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var studentSchema = new Schema({
  firstname: { type: String},
  lastname :{ type: String, },
  username :{ type: String, },
  password: { type: String, },
  about:{ type: String, },
  gender:{ type: String, },
  contactNo:{ type: Number, },
  email:{ type: String, },
  country:{ type: String, },
  city:{ type: String, },
  expertise: [],
  college:{ type: String},
  school:{ type: String},
  gradcollege:{ type: String}

});

studentSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

studentSchema.pre('save', function (next) {
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


var studentModel = mongoose.model('students', studentSchema);
module.exports = studentModel;
