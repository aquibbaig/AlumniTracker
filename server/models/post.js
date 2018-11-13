const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var postSchema = new Schema({
  post: { type: String },
  postDate: { type: String}
});


var postModel = mongoose.model('post', postSchema);
module.exports = postModel;
