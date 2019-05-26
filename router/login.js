const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.status(201);

    if (req.accepts('text')) {
        res.write('author; app; send\n');
        res.write('Marcos Santos; Book store; Hello World!\n');
        res.end();
    } else {
        res.json({
            'author': 'Marcos Santos',
            'app': 'Book store',
            'send': 'Hello World!'
        });
    }
});

module.exports = router; 