import React from 'react';
import { useSelector } from 'react-redux';
import Rating from '../../Rating/rating';

const OrderList = () => {
  const bookOrders = useSelector((state) => state.addOrdersReducer);
  console.log(bookOrders);

  return (
    <div className="order_list">
      <p className="order_name">List of your books</p>
      <div className='wrapper_orders-item'>
        {bookOrders.length > 0 ? (
          bookOrders.map((item) => item.map((book) => (
              <div key={book.id} className='book_item-order'>
                <img className="img_allbook" src={book.imageUrl} alt={book.name.split(':', 1)} />
                <p className='book_name-order'> {book.name.split(':', 1)} by {book.author}</p>
                <Rating/>
                  <button className='btn btn_order'>Return</button>
              </div>
          )))
        ) : (
          <p className="order_empty">Oops! You have not added any book yet</p>
        )}
      </div>
    </div>
  );
};

export default OrderList;
