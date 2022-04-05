const express = require('express')
const app = express()
const hbs = require('express-handlebars')
const { about } = require('./controllers/about')
const {create} = require('./controllers/create')
const { createPost } = require('./controllers/create')
const { details } = require('./controllers/details')
const { home } = require('./controllers/home')
const { notFound } = require('./controllers/notFound')
const { search } = require('./controllers/search')
const carService = require('./services/cars')

app.use(express.urlencoded({extended: true}))
app.use('/static',express.static('static'))
app.use(carService())

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine)

app.set('view engine', 'hbs')

app.get('/', home)
app.get('/about', about)
app.get('/create', create)
app.post('/create' , createPost)
app.get('/details/:id', details)
app.get('/search' , search)


app.all('*', notFound)






app.listen(3000, () => {
    console.log('Server started on port 3000');
})