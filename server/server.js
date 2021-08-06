const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const Friend = require('./models/friend');


const port = 9055;

const dbConnection = 'mongodb+srv://mick:meandbmick@cluster0.xt8j9.mongodb.net/friendbook?retryWrites=true&w=majority'

mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/add-friend',(req, res) => {
    const friend = new Friend({
        firstname: 'test',
        lastname: 'dellaert',
        email: 'mickdellaert@gmail.com',
        phonenumber: '0488244705',
        language: 'css'
    });

    friend.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});