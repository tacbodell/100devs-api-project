const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const rappers = {
    '21 savage': {
        'age': 31,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },
    'chance the rapper': {
        'age': 31,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois',
    },
    'tyler the creator': {
        'age': 33,
        'birthName': 'Tyler Gregory Okonma',
        'birthLocation': 'Hawthorne, California',
    },
    'dailon': {
        'age': 'Dailon',
        'birthName': 'Dailon',
        'birthLocation': 'Dailon',
    },
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api', (req,res) => {
    res.json(rappers);
})

app.get('/api/:rapper', (req,res) => {
    const rapper = (req.params.rapper).toLowerCase();
    if (rapper in rappers) {
        res.json(rappers[rapper]);
    }   else {
        res.statusMessage = 'name does not exist in api';
        res.status(404);
        res.send("Sorry! file not found. :(");
    }
})

const PORT = 3000;
app.listen(PORT, (req,res) => {
    console.log(`Server live on port ${3000}`);
})