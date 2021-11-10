import mongoose from 'mongoose';
const Schema =  mongoose.Schema;

const ProductsSchema = new Schema({
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

