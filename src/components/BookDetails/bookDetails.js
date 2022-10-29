import React from 'react';
import { Link } from 'react-router-dom';

const BookDetails = ({ filterBooks, bookId }) => {
  console.log(filterBooks);
  return (
        <figure className='book_details'>
<img className='book_details-img' src={filterBooks.imageUrl} alt={filterBooks.imageUrl}/>
        <figcaption className='book_details-content'>
<Link to={`/books/${bookId}`} className='book_details-name'>{filterBooks.name}</Link>
        </figcaption>
        </figure>
  );
};

export default BookDetails;
