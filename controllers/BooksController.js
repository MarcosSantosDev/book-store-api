module.exports = {
    getAll: (req, res) => {
        res.status(201);
        res.json({
            'book': 'Fortaleza Digital',
            'author': 'Dan Bronw',
            'year': '1998'
        });
    },
    getById: (req, res) => {
        res.send('getById a book');
    },
    putById: (req, res) => {
        res.send('putById a book');
    },
    delete: (req, res) => {
        res.send('delete a book');
    }
}