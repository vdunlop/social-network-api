const mongoose = require('mongoose');

// Create a new instance of the schema class for Reaction schema - what a Reaction is
const reactionSchema = new mongoose.Schema({
    // Configure individual properties using Schema types
    // only defines what a document shape should look like, it doesn't
    // create a place to store that
    reactionId: {type: String, default:'a'},
    reactionBody: {type:String, required: true},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now },
});

// Using mongoose.model() to compile/create a model based on the schema 'thoughtSchema'
// model name is MyReaction
// create a collection called Reaction
const Reaction = mongoose.model('Reaction', reactionSchema);

// Create a new instance of the model, a document
Reaction.create([
    {reactionId: 'One', reactionBody: 'TestReaction', username: 'TestOne', createdAt: Date()},
])
.then((result) => console.log('Created new document', result))
.catch((err) => console.error(err));

module.exports = Reaction;