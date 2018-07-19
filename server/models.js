const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restful_tasks_api', {useNewUrlParser: true}, (errs) => console.log(errs))

const ProductSchema = new mongoose.Schema ({
    title: {type: String, required: [
        true, "Pick a title."],
        minlength: [4, "Pick a longer title."
    ]},
    price: {type: Number, required: [true, "It can't be free!"]},
    url: {type: String, required: [true, "Pick a photo."]},
})

const Products = mongoose.model('product', ProductSchema);

module.exports = Products
