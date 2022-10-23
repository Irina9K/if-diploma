import React from 'react';
import IconsSVG from '../../assets/img/sprite.svg';
import '../../assets/css/button.css';
import './book.css';
import '../../assets/css/style.css';

const Book = ({ key, name, imageUrl }) => (

    <figure key={key} className="book_item">
      <img className="img_allbook" src={imageUrl} alt={name} />

      <figcaption className="book_status">
        <p className="status_available">Available</p>
        {/* <p className='status_taken'>Taken</p> */}
        <p className="book_name">{name.split(':', 1)}</p>
        <p className="who_order">Irina</p>
        <div className="star">
          <svg className="star_dark_icon">
            <use xlinkHref={`${IconsSVG}#star_dark`} />
          </svg>
          <svg className="star_dark_icon">
            <use xlinkHref={`${IconsSVG}#star_dark`} />
          </svg>
          <svg className="star_dark_icon">
            <use xlinkHref={`${IconsSVG}#star_dark`} />
          </svg>
          <svg className="star_dark_icon">
            <use xlinkHref={`${IconsSVG}#star_dark`} />
          </svg>
          <svg className="star_dark_icon">
            <use xlinkHref={`${IconsSVG}#star_dark`} />
          </svg>
        </div>

        <button className="btn btn_order">Order</button>
      </figcaption>
    </figure>
);

export default Book;
