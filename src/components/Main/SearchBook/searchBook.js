import React from 'react';
import './searchBook.css';
import '../../../assets/css/style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import {  } from '@types/react';

const SearchBook = () => {
  const isShowContent = useSelector((state) => state.reducerContent.isShow);
  const apiResultSearch = useSelector((state) => state.apiReducerSearch.response);

  return (
    <div
      className={`container ${isShowContent ? 'container_searchBlock' : 'container_searchNone'}`}
    >
      {apiResultSearch.map((book) => (
          <figure key={book.id} className="container_search-content">
            <Link to={`/books/${book.id}`}>
              <img className="search_img" src={book.imageUrl} alt={book.name} />
            </Link>
            <figcaption className="search_name">{book.author}</figcaption>
            <figcaption className="search_length">{book.name.split(':', 1)}</figcaption>
          </figure>
      ))}
    </div>
  );
};

export default SearchBook;
