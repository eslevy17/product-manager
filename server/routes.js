const express = require('express');
const bp = require('body-parser');
const api = require('./controllers');

const app = express();

function router(app) {

    app.use(bp.json());

    app.get('/api/products', api.viewAll);

    app.get('/api/products/:id', api.findOne);

    app.post('/api/products', api.addNew);

    app.delete('/api/products/:id', api.deleteProduct);

    app.patch('/api/products/:id', api.updateProduct);

}

module.exports = router;
