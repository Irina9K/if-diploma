import React from 'react';
import './searchBook.css';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchBook = ({ booksSearch, bookId }) => {
  const isShowContent = useSelector((state) => state.reducerContent.isShow);

  return (
    <div
      className={`container ${isShowContent ? 'container_searchBlock' : 'container_searchNone'}`}
    >
      {booksSearch.map((book) => (
        <figure key={book.id} className="container_search-content">
          <img className="search_img" src={book.imageUrl} alt={book.name} />
          <figcaption className="search_name">
            <Link to={`/books/${bookId}`}>{book.author}</Link>
          </figcaption>
          <figcaption className="search_length">{book.name.split(':', 1)}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default SearchBook;
