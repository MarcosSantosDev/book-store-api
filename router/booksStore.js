const { Router } = require('express');

const {
  getAll, getById, create, putById, remove,
} = require('../controllers/BooksController');

const router = Router();

router.get('/', getAll);

router.get('/:_id', getById);

router.post('/', create);

router.put('/:_id', putById);

router.delete('/:_id', remove);

module.exports = router;
