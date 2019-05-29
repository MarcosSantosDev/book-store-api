const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.status(201);
  res.json({
    app: 'Book store',
    author: 'Marcos Santos',
    linkedIn: 'https://www.linkedin.com/in/marcossantosdev/',
  });
});

module.exports = router;
