import React from 'react';

import './orders.css';
import '../../../assets/css/style.css';

const Orders = () => (
  <div className="wrapper_orders container">
    <div className="order_wait">
      <p className="order_name">Waiting for</p>
      <p className="order_empty">Oops! You are not waiting for any book </p>
    </div>
    <div className="order_list">
      <p className="order_name">List of your books</p>
      <p className="order_empty">Oops! You have not added any book yet</p>
    </div>
  </div>
);

export default Orders;
