import React from 'react';
import './searchBook.css';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';
import BookDetails from '../BookDetails/bookDetails';

const SearchBook = ({ filterBooks, bookId }) => (
  <div className="container_search">
    {filterBooks.map((book) => (
      <figure key={book.id} className="container_search-content">
        <img className="search_img" src={book.imageUrl} alt={filterBooks.name}/>
        <figcaption className="search_name">
          <Link to={`/books/${bookId}`}>{book.author}</Link>
        </figcaption>
        <figcaption className="search_length">{book.length}</figcaption>
      </figure>
    ))}
    <BookDetails filterBooks={filterBooks} bookId={bookId}/>
  </div>
);

export default SearchBook;
