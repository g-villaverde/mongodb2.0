import mongoose from 'mongoose';
const products = 'products';

const ProductsSchema = mongoose.Schema({
    id: Number,
    timestamp: Date,
    name: String,
    description: String,
    code: String,
    photo: String,
    price: String,
    stock: String
})


export default mongoose.model('products', ProductsSchema);

