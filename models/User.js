// Require schema and model from mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class for User schema - what a User is
const userSchema = new mongoose.Schema({
  // Configure individual properties using Schema Types
  username: { type: String, unique: true, required: true, trimmed: true },
  email: { type: String, unique: true, required: true },
  thoughts: {},
  friends: {},
});

// Using mongoose.model() to compile/create a model based on the schema 'userSchema'
// model name is User
const User = mongoose.model('User', userSchema);

// Create a new instance of the model, a document
User.create([
  { username: 'TestOne', email: 'test.one@tst.com', thoughts:[],friends:[] },
])
.then((result) => console.log('Created new document', result))
.catch((err) => console.error(err));

module.exports = User;
