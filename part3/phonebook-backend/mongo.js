const mongoose = require('mongoose')

// make sure that command line arguments are valid
if (process.argv.length > 5 || process.argv.length === 4 || process.argv.length < 3) {
    console.log('invalid arguments')
    process.exit(1)
}

// parse command line arguments for database password
const password = process.argv[2]
const url = `mongodb+srv://paulpham1871:${password}@cluster0.lpc3xy5.mongodb.net/phonebookApp?appName=Cluster0`

// do not set mongoose to query database strictly
mongoose.set('strictQuery',false)

// connect to phonebook database
mongoose.connect(url, { family: 4 })

// create schema for person
const personSchema = mongoose.Schema({
    name: String,
    number: String
})

// create model for person for persons collection in our database
const Person = mongoose.model('Person', personSchema)

// check command line argument length
if (process.argv.length === 3) {
    Person.find({}).then(people => {
        console.log('phonebook:')
        people.forEach(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}
else {
    // parse command line arguments for new person to add to phonebook
    const newName = process.argv[3]
    const newNumber = process.argv[4]

    // create new object to add to database
    const person = new Person({
        name: newName,
        number: newNumber
    })

    // add new object to database
    person.save().then(result => {
        console.log(`added ${result.name} number ${result.number} to phonebook`)
        mongoose.connection.close()
    })
}