const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const dbConnection = 'mongodb+srv://mick:meandbmick@cluster0.xt8j9.mongodb.net/friendbook?retryWrites=true&w=majority'

const port = 9055;

mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})