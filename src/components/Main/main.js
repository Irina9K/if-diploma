import React from 'react';
import background from '../../assets/img/image.png';
import '../../assets/css/style.css';
import './main.css';
import '../../assets/css/button.css';

const Main = () => (
  <main
      style={{
        backgroundImage: `url(${background})`,
      }}>
    <div className="main_container container">
      <div className="maim_content">
        <h1>BIld your library</h1>
        <div className="main_content-text">
          Over 400.000 books from fiction to the business literature
        </div>
        <button className='btn main_btn'>Let’s start</button>
      </div>
    </div>
  </main>
);

export default Main;
