var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/pictures/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('pictures').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(item);
            }
        })
    });

    app.delete('/pictures/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('pictures').remove(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send('Picture ' + item + ' deleted!');
            }
        })
    });

    app.post('/pictures', (req, res) => {
        const picture = {text: req.body, title: req.body.title}
            db.collection('pictures').insert(picture, (err, result) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(result.ops[0]);
                }
            })
    })

    app.put('/pictures/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const picture = { text: req.body, title: req.body.title };
        db.collection('pictures').update(details, picture, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(picture);
            }
        });
    });
};