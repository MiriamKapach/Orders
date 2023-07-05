import React from 'react';
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core';

const OrderTable = ({ orders }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order ID</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Delivery Date</TableCell>
          <TableCell>Comments</TableCell>
        </TableRow>
      </TableHead>
      <tbody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.orderNumber}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.description}</TableCell>
            <TableCell>{order.price}</TableCell>
            <TableCell>{order.deliveryDate}</TableCell>
            <TableCell>{order.remarks}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderTable;
