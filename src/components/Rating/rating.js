import React from 'react';
import IconsSVG from '../../assets/img/sprite.svg';
import './rating.css';
import '../../assets/css/style.css';

const Rating = () => (
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
);

export default Rating;
