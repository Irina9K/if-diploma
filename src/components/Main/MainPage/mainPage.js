import React from 'react';
import { Link } from 'react-router-dom';

import background from '../../../assets/img/image.png';
import './mainPage.css';
import '../../../assets/css/style.css';

const MainPage = () => (
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
        <button className="btn main_btn">
          <Link to={'books'}> Let’s start</Link>
        </button>
      </div>
    </div>
);
export default MainPage;
