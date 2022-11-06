import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import background from '../../../assets/img/image.png';
import './mainPage.css';
import '../../../assets/css/style.css';

const MainPage = () => {
  const isShowContent = useSelector((state) => state.reducerContent.isShow);

  function clickButtonStart() {
    // eslint-disable-next-line no-unused-expressions
    !isShowContent && alert('Please login to your profile or register.');
  }

  return (
    <div
      className="container main_containerBlock"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="maim_content">
        <h1>BIld your library</h1>
        <div className="main_content-text">
          Over 400.000 books from fiction to the business literature
        </div>
        <button onClick={clickButtonStart} className="btn main_btn">
          {isShowContent ? (
            <Link to={'books'}> Let’s start</Link>
          ) : (
            <Link to={'/'}> Let’s start</Link>
          )}
        </button>
      </div>
    </div>
  );
};
export default MainPage;
