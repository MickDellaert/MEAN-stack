const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const friendController = require('./controllers/friendController');


const port = 9055;

const dbConnection = 'mongodb+srv://mick:meandbmick@cluster0.xt8j9.mongodb.net/friendbook?retryWrites=true&w=majority'

mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then((result) => console.log('connected to database'))
    .catch((err) => console.log(err))

// -- Another way of making an connection using db.on and db.once --
// -- With this method promise is ignored todo --
// mongoose.connect('mongodb+srv://mick:meandbmick@cluster0.xt8j9.mongodb.net/friendbook?retryWrites=true&w=majority\'', {useNewUrlParser: true, useUnifiedTopology: true});
//
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('connected!');
// });

// -- bodyParser middleware todo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// -- Fixing cors policy error
app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.use('/friends', friendController)