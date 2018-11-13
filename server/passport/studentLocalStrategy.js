const Student = require('../models/students')
const LocalStrategy = require('passport-local').Strategy

const studentStrategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		console.log("finding");
		Student.findOne({ username: username }, (err, user) => {
			if (err) {
				console.log(err)
				return done(err)
			}
			if (!user) {
				console.log("Incorrect Username");
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				console.log("Incorrect Password")
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = studentStrategy
