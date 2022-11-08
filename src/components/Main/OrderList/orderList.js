import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../../Rating/rating';
import allActions from '../../../store/actions';

const OrderList = () => {
  const arrOrders = useSelector((state) => state.addOrdersReducer);
  console.log(arrOrders);
  const dispatch = useDispatch();

  const removeToOrderBook = (bookId) => {
    dispatch(allActions.removeOrders(bookId));
  };

  return (
    <div className="order_list">
      <p className="order_name">List of your books</p>
      <div className="wrapper_orders-item">
        {arrOrders.booksOrder.length ? (
          arrOrders.booksOrder.map((book) => (
            <div key={book.id} className="book_item-order">
              <Link to={`/books/${book.id}`}>
                <img className="img_allbook" src={book.imageUrl} alt={book.name.split(':', 1)} />
              </Link>
              <p className="book_name-order">
                {book.name.split(':', 1)} by {book.author}
              </p>
              <Rating />
              <button onClick={() => removeToOrderBook(book.id)} className="btn btn_order">
                Return
              </button>
            </div>
          ))
        ) : (
          <p className="order_empty">Oops! You have not added any book yet</p>
        )}
      </div>
    </div>
  );
};

export default OrderList;
