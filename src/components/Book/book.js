import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/button.css';
import './book.css';
import '../../assets/css/style.css';
import Rating from '../Rating/rating';

const Book = ({ key, name, imageUrl, bookId }) => {
  const [conditionsBook, setconditionsBook] = useState('true');

  function changeConditionsBook() {
    setconditionsBook(!conditionsBook);
  }

  // {showMore ? 'Show less' : 'Show more'}

  return (
    <figure key={key} className="book_item">
      <img className="img_allbook" src={imageUrl} alt={name} />

      <figcaption className="book_status">
        <p className="status_available">{conditionsBook ? 'Available' : 'Taken'}</p>
        <p className="book_name">
          <Link to={`/books/${bookId}`}> {name.split(':', 1)}</Link>
        </p>
        <p className="who_order">Irina</p>
        <Rating/>

        <button onClick={changeConditionsBook} className="btn btn_order">
          Order
        </button>
      </figcaption>
    </figure>
  );
};

export default Book;
