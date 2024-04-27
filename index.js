const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const books = {
    "all tomorrows": {
        "Title": "All Tomorrows",
        "Author": "C.M. Kösemen",
        "Genre": "Science Fiction",
        "id": 1
    },
    "the way of kings": {
        "Title": "The Way of Kings",
        "Author": "Robert Jordan",
        "Genre": "High Fantasy",
        "Series": "The Wheel of Time",
        "id": 2
    },
    "how to win friends and influence people": {
        "Title": "How to Win Friends and Influence People",
        "Author": "Dale Carnegie",
        "Genre": "Self-Help Book",
        "id": 3
    },
    "atomic habits": {
        "Title": "Atomic Habits",
        "Author": "Dale Carnegie",
        "Genre": "Self-Help Book",
        "id": 4
    },
}

app.get('/', (req,res) => {
    res.render('index.ejs', { books: books, } );
})

app.get('/api', (req,res) => {
    res.json(books);
})

app.get('/api/:book', (req,res) => {
    const book = (req.params.book).toLowerCase();
    if (book in books) {
        res.json(books[book]);
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