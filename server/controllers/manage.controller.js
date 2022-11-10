// const { model } = require('mongoose');
const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) =>{
    Product.find()
        .then(findAll => res.json(findAll))
        .catch(err => res.json({error: err}))
}

module.exports.findOneProductById = (req,res) =>{
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({error: err}))
}

module.exports.createNewProduct = (req,res) =>{
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({error: err}))
}

module.exports.findOneProductAndDelete = (req,res) =>{
    Product.deleteOne({_id: req.params.id})
        .then(deleteOneItem => res.json(deleteOneItem))
        .catch(err => res.json({error: err}))
}

module.exports.findProductAndUpdate = (req,res) =>{
    console.log(req.body);
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updateOneItem => res.json(updateOneItem))
        .catch(err => res.json({error: err}))
}
