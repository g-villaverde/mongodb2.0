import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    timestamp: Date,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
        }
    ]
})

export default mongoose.model('cart', cartSchema); 