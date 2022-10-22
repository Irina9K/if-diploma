import React from 'react';
import { useSelector } from 'react-redux';

import background from '../../assets/img/image.png';
import '../../assets/css/style.css';
import './main.css';
import '../../assets/css/button.css';

const Main = () => {
  const isShowContent = useSelector((state) => state.reducerContent.isShow);
  return (
    <main
      // style={{
      //   backgroundImage: `url(${background})`,
      // }}
    >
      <div
          className={`container ${
            !isShowContent ? 'main_containerBlock' : 'main_containerNone'
          }`}
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
    </main>
  );
};

export default Main;
