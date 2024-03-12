// Require schema and model from mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const userSchema = new mongoose.Schema({
  // Configure individual properties using Schema Types
  username: { type: String, unique: true, required: true, trimmed: true },
  email: { type: String, unique: true, required: true },
  thoughts: {},
  friends: {},
});

// Using mongoose.model() to compile a model based on the schema 'userSchema'
const User = mongoose.model('MyUser', userSchema);

// Create a new instance of the model, a document
User.create([
  { username: 'TestOne', email: 'test.one@tst.com', thoughts:[],friends:[] },
]);

module.exports = User;
