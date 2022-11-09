// const { model } = require('mongoose');
const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) =>{
    Product.find()
        .then(product => res.json({allProduct: product}))
        .catch(err => res.json({error: err}))
}

module.exports.findOneProductById = (req,res) =>{
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json({oneProductById: oneProduct}))
        .catch(err => res.json({error: err}))
}

module.exports.createNewProduct = (req,res) =>{
    Product.create(req.body)
        .then(newProduct => res.json({newProduct: newProduct}))
        .catch(err => res.json({error: err}))
}

