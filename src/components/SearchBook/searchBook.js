import React from 'react';
import './searchBook.css';
import '../../assets/css/style.css';

const SearchBook = ({ filterBooks }) => (
  <div className="container_search">
    {filterBooks.map((book) => (
      <figure key={book.id} className="container_search-content">
        <img className="search_img" src={book.imageUrl} />
        <figcaption className="search_name">{book.author}</figcaption>
        <figcaption className="search_length">{book.length}</figcaption>
      </figure>
    ))}
  </div>
);

export default SearchBook;
