import React from 'react';
import { useSelector } from 'react-redux';
import Rating from '../../Rating/rating';

const OrderList = () => {
  const arrOrders = useSelector((state) => state.addOrdersReducer);
  console.log(arrOrders.booksOrder);

  //   function removeToOrderBook(bookId) {
  //     const indexBookRomove = arrOrders.findIndex((i) => i.find((item) => item.id === bookId));
  //     const removeBook = arrOrders.splice(indexBookRomove, 1);
  //       logger(removeBook)
  //     console.log(arrOrders);
  //     dispatch(allActions.addOrders(arrOrders))
  // // dispatch(allActions.removeOrders(arrOrders))
  //   }

  return (
    <div className="order_list">
      <p className="order_name">List of your books</p>
      <div className="wrapper_orders-item">
        {arrOrders.booksOrder.length > 0 ? (
          arrOrders.booksOrder.map((book) => (
            <div key={book.id} className="book_item-order">
              <img className="img_allbook" src={book.imageUrl} alt={book.name.split(':', 1)} />
              <p className="book_name-order">
                {book.name.split(':', 1)} by {book.author}
              </p>
              <Rating />
              <button className="btn btn_order">Return</button>
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
