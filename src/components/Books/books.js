import React, { useState } from 'react';

import '../../assets/css/button.css';
import './books.css';
import '../../assets/css/style.css';

import Book from '../Book/book';

const Books = ({ arrAllBooks }) => {
  const [showMore, setShowMore] = useState(false);
  // const  allBooks  = arrAllBooks;

  return (
    <div className="all_books">
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
