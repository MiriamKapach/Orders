import ordersData from './DB.json';
// import CRUD from './CRUD.tsx'

export default function Orders() {
  return (
    <div>
      <h1>Order List</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>description</th>
            <th>price</th>
            <th>deliveryDate</th>
            <th>comments</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.ordersData.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.description}</td>
              <td>{order.price}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <CRUD></CRUD> */}
    </div>
  );
}
