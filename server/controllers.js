const Products = require('./models');

function viewAll(req,res){
    Products.find({})
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

function addNew(req,res){
    Products.create(req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs))
}

function deleteProduct(req,res){
    Products.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs))
}

function updateProduct(req,res){
    Products.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
        .then(data => res.json(data))
        .catch(errs => res.json(errs))
}

function findOne(req,res){
    Products.findById(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs))
}

module.exports = {
    viewAll: viewAll,
    addNew: addNew,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
    findOne: findOne,
}
