const mongoose = require('mongoose');

// Create a new instance of the schema class for Thought schema - what a Thought is
const thoughtSchema = new mongoose.Schema({
    // Configure individual properties using Schema types
    thoughtText: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    username: {type: String, required: true},
    reactions: {}
});

// Using mongoose.model() to compile/create a model based on the schema 'thoughtSchema'
const Thought = mongoose.model('Thought', thoughtSchema);

// Create a new instance of the model, a document
Thought.create([
    {thoughtText: 'TestThought', createdAt: Date(), username: 'TestOne', reactions: []},
])
.then((result) => console.log('Created new document', result))
.catch((err) => console.error(err));

module.exports = Thought;