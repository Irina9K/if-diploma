import React from 'react';
import mainImg from '../../assets/img/image.png';
import '../../assets/css/style.css';
import './main.css';

const Main = () => (
  <main>
    <div className="main_container container">
      <img className="main_img" src={mainImg} alt="mainImg" />
    </div>
  </main>
);

export default Main;
