const express = require('express');
const router = express.Router();

const methodsBook  = require('../controllers/BooksController'); 

router.get('/', methodsBook.getAll);

router.get('/:id', methodsBook.getById);

router.post('/', methodsBook.getById);

router.put('/:id', methodsBook.putById);

router.delete('/:id', methodsBook.delete);

module.exports = router;