import React, { useEffect, useState } from 'react';

import '../../../assets/css/button.css';
import './books.css';
import '../../../assets/css/style.css';

import { useSelector } from 'react-redux';

import Book from '../../Book/book';
import { API_URL } from '../../../constants/api.constants';

const Books = () => {
  const [showMore, setShowMore] = useState(false);
  const isShowContent = useSelector((state) => state.reducerContent.isShow);

  const [arrAllBooks, setArrAllBooks] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((result) => {
        setArrAllBooks(result);
      });
  }, []);

  return (
    <div className={isShowContent ? 'all_booksBlock' : 'all_booksNone'}>
      <h2>All books</h2>
      <div className="book_list">
        {showMore ?
          arrAllBooks.map((book) => (
              <Book key={book.id} name={book.name} imageUrl={book.imageUrl} showMore={showMore} />
          ))
          : arrAllBooks
            .slice(0, 4)
            .map((book) => (
                <Book key={book.id} name={book.name} imageUrl={book.imageUrl} showMore={showMore} />
            ))}
      </div>
      <button className="btn btn_more" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default Books;
