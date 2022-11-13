import React from 'react';
// import { useSelector } from 'react-redux';
// import Rating from '../../Rating/rating';

const WaitingList = () => (
  <div className="order_wait">
    <p className="order_name">Waiting for</p>
    <div className="wrapper_orders-item">
      {/* {bookOrders.length > 0 ? ( */}
      {/*  bookOrders.map((item) => item.map((book) => ( */}
      {/*      <div key={book.id} className="book_item-order"> */}
      {/*        <img className="img_allbook" src={book.imageUrl} alt={book.name.split(':', 1)} /> */}
      {/*        <p className="book_name-order"> */}
      {/*          {' '} */}
      {/*          {book.name.split(':', 1)} by {book.author} */}
      {/*        </p> */}
      {/*        <Rating /> */}
      {/*        <button className="btn btn_order">Check status</button> */}
      {/*      </div> */}
      {/*  ))) */}
      {/* ) : ( */}
      {/*  <p className="order_empty">Oops! You are not waiting for any book</p> */}
      {/* )} */}
      <p className="order_empty">Oops! You are not waiting for any book</p>
    </div>
  </div>
);
export default WaitingList;
