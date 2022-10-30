import React from 'react';

const BookDetails = ({ filterBooks }) => {
  console.log(filterBooks);
  return (
    <figure className="book_details">
      <img className="book_details-img" src={filterBooks.imageUrl} alt={filterBooks.imageUrl} />
      <figcaption className="book_details-content">
        <p className="book_details-name">{filterBooks.name}</p>
        <p>{filterBooks.author}</p>
        <p>{filterBooks.length}</p>
        <button>Orders</button>
        <p>About book</p>
        <p>{filterBooks.description}</p>
        <button>Show more</button>
      </figcaption>
    </figure>
  );
};

export default BookDetails;
