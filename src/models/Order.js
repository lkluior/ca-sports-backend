const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    productId: String,
    name: String,
    price: Number,
    size: String,
    quantity: Number,
    subtotal: Number
}, { _id: false });

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    total: { type: Number, required: true },
    status: { type: String, default: 'Aguardando contato' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
