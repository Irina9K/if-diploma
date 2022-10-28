import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import background from '../../assets/img/image.png';
import '../../assets/css/style.css';
import './main.css';
import '../../assets/css/button.css';
import { API_URL } from '../../constants/api.constants';
import Books from '../Books/books';

const Main = () => {
  const [arrAllBooks, setArrAllBooks] = useState([]);
  const isShowContent = useSelector((state) => state.reducerContent.isShow);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((result) => {
        setArrAllBooks(result);
      });
  }, []);

  // console.log(arrAllBooks);
  return (
    <main>
      <div
        className={`container ${!isShowContent ? 'main_containerBlock' : 'main_containerNone'}`}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="maim_content">
          <h1>BIld your library</h1>
          <div className="main_content-text">
            Over 400.000 books from fiction to the business literature
          </div>
          <button className="btn main_btn">Let’s start</button>
        </div>
      </div>
      <Books arrAllBooks={arrAllBooks} />
    </main>
  );
};

export default Main;
