
import { firestore } from '../../firebaseConfig';

const ordersCollection = firestore.collection('orders');

// Create a new order
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { customerName, product, status } = req.body;

    const orderData = {
      customerName,
      product,
      status,
    };

    try {
      const docRef = await ordersCollection.add(orderData);
      const order = { id: docRef.id, ...orderData };

      res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
      res.status(500).json({ message: 'Error creating order', error });
    }
  } else if (req.method === 'GET') {
    try {
      const snapshot = await ordersCollection.get();
      const orders = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving orders', error });
    }
  } else if (req.method === 'PUT') {
    const { id, customerName, product, status } = req.body;

    try {
      const orderRef = ordersCollection.doc(id);
      const updatedOrderData = { customerName, product, status };

      await orderRef.update(updatedOrderData);

      const updatedOrder = { id, ...updatedOrderData };

      res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
    } catch (error) {
      res.status(500).json({ message: 'Error updating order', error });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      await ordersCollection.doc(id).delete();

      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting order', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
