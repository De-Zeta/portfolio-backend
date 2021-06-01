const express = require('express');
const cors = require('cors')

const app = express()
const port = process.env.PORT || 8080;

//Route variables
const about = require('./JSON/about.json');
const portfolio = require('./JSON/portfolio.json')

app.use(cors());


app.get('/about', (req, res) => {
    res.json(about)
})

app.get('/portfolio', (req, res) => {
    res.json(portfolio)
})


app.listen(port, () => {
    console.log('Connected on:' + port)

})
