import React from 'react';
import './orders.css';
import '../../assets/css/style.css';
import OrderList from '../OrderList/orderList';
import WaitingList from '../WaitingList/waitingList';

const Orders = () => (
  <div className="wrapper_orders container">
    <OrderList />
    <WaitingList />
  </div>
);

export default Orders;
