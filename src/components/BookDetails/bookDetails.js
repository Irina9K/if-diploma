import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../assets/css/style.css';
import './bookDetails.css';
import '../../assets/css/button.css';
import Rating from '../Rating/rating';

const BookDetails = () => {
  const [showMore, setShowMore] = useState(false);

  const apiResult = useSelector((state) => state.apiReducer.response);

  const { bookId } = useParams();
  const thisBook = apiResult.find((book) => book.id === bookId);

  return (
    <figure className="book_details container">
      <img className="book_details-img" src={thisBook.imageUrl} alt={thisBook.imageUrl} />
      <figcaption className="book_details-content">
        <Rating/>
        <p className="book_details-name">{thisBook.name}</p>
        <p className='book_details-author'>{thisBook.author}</p>
        <p className='book_details-length'>{thisBook.length}, released in {thisBook.released}</p>
        <button className='btn btn_order btn_'>Orders</button>
        <p className='book_details-about'>About book</p>
        <p className='book_details-description'>

          {showMore ? `${thisBook.description}` : `${thisBook.description}`.substring(0, 250)}

        </p>
        <button className='btn btn_order' onClick={() => setShowMore(!showMore)}>  {showMore ? 'Show less' : 'Show more'}</button>
      </figcaption>
    </figure>
  );
};

export default BookDetails;
