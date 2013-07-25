var Mongoose = require('mongoose');

exports.TodoSchema = new Mongoose.Schema({
  description : { type : String, required : true },
  due : { type : Date, required : true },
  done : { type : Boolean, default : false }
});