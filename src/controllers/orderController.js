const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        const { items, total } = req.body;
        
        if (!items || items.length === 0) {
            return res.status(400).json({ error: 'Carrinho vazio' });
        }

        const order = new Order({
            userId: req.userId,
            total: parseFloat(total),
            items: items, 
            status: 'Aguardando contato'
        });
        await order.save();

        res.status(201).json({ message: 'Pedido criado com sucesso', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar pedido' });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.userId }).sort({ createdAt: -1 });
        // Remap _id to id for frontend compatibility
        const mappedOrders = orders.map(o => ({
            id: o._id,
            total: o.total,
            status: o.status,
            items: o.items,
            createdAt: o.createdAt
        }));
        res.json({ orders: mappedOrders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
};
