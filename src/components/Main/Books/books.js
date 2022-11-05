import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import allAction from '../../../store/actions';
import '../../../assets/css/button.css';
import './books.css';
import '../../../assets/css/style.css';

import Book from '../../Book/book';
import { API_URL } from '../../../constants/api.constants';

const Books = () => {
  const [showMore, setShowMore] = useState(false);
  const isShowContent = useSelector((state) => state.reducerContent.isShow);
  const [arrAllBooks, setArrAllBooks] = useState([]);

  const dispatch = useDispatch();

  const apiResultSearch = useSelector((state) => state.apiReducerSearch.response);
  console.log(apiResultSearch);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((result) => {
        setArrAllBooks(result);
        dispatch(allAction.getBooks(result));
        dispatch(allAction.getBooksSearch([]));
      });
  }, []);

  return (
    <div className={isShowContent ? 'all_booksBlock' : 'all_booksNone'}>
      <h2>All books</h2>
      <div className="book_list">
        {showMore ?
          arrAllBooks.map((book) => (
              <Book
                key={book.id}
                name={book.name}
                imageUrl={book.imageUrl}
                showMore={showMore}
                bookId={book.id}
              />
          ))
          : arrAllBooks
            .slice(0, 4)
            .map((book) => (
                <Book
                  key={book.id}
                  name={book.name}
                  imageUrl={book.imageUrl}
                  showMore={showMore}
                  bookId={book.id}
                />
            ))}
      </div>
      <button className="btn btn_more" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default Books;
