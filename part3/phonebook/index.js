const express = require('express')
const morgan = require('morgan')
const app = express()

const logger = morgan('tiny')

app.use(express.json())
app.use(logger)

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Phonebook app</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const person = persons.find(person => person.id === id)

    if (!person) {
        res.statusMessage = 'Person not found'
        res.status(404).end()
        return
    }

    res.json(person)
})

app.get('/info', (req, res) => {
    const now = new Date()
    const reqTime = now.toString()
    res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${reqTime}</p>
    `)
})

app.post('/api/persons', (req, res) => {
    if (!req.body.name || !req.body.number) {
        res.status(400).json({
            error: "Bad request",
            message: "Request body could not be read properly"
        })
        return
    }

    if (persons.some(person => person.name.toLowerCase() === req.body.name.toLowerCase())) {
        res.status(400).json({
            error: "Bad request",
            message: "Resource already exists"
        })
        return
    }

    const id = `id${Math.random().toString(16).slice(2)}`
    const newPerson = {...req.body, id}
    persons = persons.concat(newPerson)
    res.json(newPerson)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})