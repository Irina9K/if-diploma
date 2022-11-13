import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../Rating/rating';
import allAction from '../../store/actions';

import '../../assets/css/button.css';
import './style.css';
import '../../assets/css/style.css';

const Index = ({ key, name, imageUrl, bookId }) => {
  const [conditionsBook, setconditionsBook] = useState('true');
  const [disabled, setDisabled] = useState(false);
  const apiResult = useSelector((state) => state.apiReducer.response);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.reducerUserInf.userInfo);

  function changeConditionsBook() {
    const bookIdOrders = apiResult.filter((book) => Object.values(book).includes(bookId));
    dispatch(allAction.addOrders(bookIdOrders));
    setconditionsBook(!conditionsBook);
    setDisabled(true);
  }

  return (
    <figure key={key} className="book_item">
      <Link to={`/books/${bookId}`}>
        <img className="img_allbook" src={imageUrl} alt={name} />
      </Link>
      <figcaption className="book_status">
        <p className="status_available">{conditionsBook ? 'Available' : 'Taken'}</p>
        <p className="book_name">{name.split(':', 1)}</p>
        <p className="who_order">{!conditionsBook ? userInfo && userInfo.userName : ''}</p>
        <Rating />
        <button
          disabled={disabled}
          onClick={() => changeConditionsBook(bookId)}
          className="btn btn_order"
        >
          Order
        </button>
      </figcaption>
    </figure>
  );
};

export default Index;
