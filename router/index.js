const express = require('express');
const router = express.Router();

const routes = {
    books: require('./books'),
    login: require('./login'),
    booksStore: require('./booksStore')
};

router.get('/', (req, res) => {
    res.status(201);
    res.json({
        'app': 'Book store',
        'author': 'Marcos Santos',
        'linkedIn': 'https://www.linkedin.com/in/marcossantosdev/'
    });
});

router.use('/books', routes.books);

module.exports = router;