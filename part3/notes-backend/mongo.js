const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fso_notes_paulp1871:${password}@cluster0.t594rsh.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

// first argument is URL of database
// second argument is object that defines required settings, tells us that we connect to database using IPv4 addresses
mongoose.connect(url, { family: 4 })

// tells Mongoose how the note objects are to be stored in the database (a blueprint at the app-level)
// mongodb itself is schemaless, so we must enforce and validate our database rules at the app-level instead
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

// models are classes/constructors created off the noteschema and their name
const Note = mongoose.model('Note', noteSchema)

// the model constructor creates a new JS object which also has access to all of the mongoose model's properties/methods
const note = new Note({
  content: 'Toji has so much frigging aura',
  important: false,
})

// we save the created note model instance (a document) to our database with the save method provided by mongoose...
// then once it is saved, an event handler is called which will log it as saved in the console and...
// terminate the connection to the database
// note.save().then(result => {
//   // result is simply the response we get from mongodb once we save our document to the collection, usually the document itself
//   console.log('note saved!', result)
//   mongoose.connection.close()
// })
// above code commented out to look at fetching objects from mongodb below

// retrieve all documents from the database (more specifically, the notes collection) with the find method of the note model
// the parameter of the method is an object expressing search conditions
// search conditions must adhere to MongoDB's query syntax
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})