const products = require('../controllers/manage.controller');

module.exports = (app) => {
    app.get('/api/product', products.findAllProducts);
    app.get('/api/product/:id', products.findOneProductById);
    app.post('/api/product/create', products.createNewProduct);
}