import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../store/reducerBooks';

import IconsSVG from '../../assets/img/sprite.svg';
import './header.css';
import '../../assets/css/style.css';
import Auth from '../Auth/auth';
import { logOutAction } from '../../store/actions';
import Settings from '../Settings/settings';
import SearchBook from '../SearchBook/searchBook';

const Header = () => {
  const [showNavigation, setshowNavigation] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // const [booksSearch, setBookSearch] = useState([]);

  const loginCondition = useSelector((state) => state.reducerLogIn.isLogin);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);
  console.log(books);

  useEffect(() => {
    fetchBooks();
  }, []);

  // function handleChange(e) {
  //   e.preventDefault();
  //   const searchString = e.target.value.trim().toLowerCase();
  //   console.log(searchString);
  //
  //   const searchBook = books.filter(
  //     (item) =>
  //       item.name.trim().toLowerCase().includes(searchString) ||
  //       item.author.trim().toLowerCase().includes(searchString),
  //   );
  //   console.log(searchBook);
  //   setArrBooksSearch(searchBook);
  // }

  const filterBooks = books.filter(
    (book) => book.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      book.author.toLowerCase().includes(inputValue.toLowerCase()),
  );

  console.log(filterBooks);

  function showLogIn() {
    dispatch(logOutAction());
  }

  function showSettings() {
    setShowSettingsMenu(!showSettingsMenu);
  }

  return (
    <header>
      <Auth setshowNavigation={setshowNavigation} />
      <div className="container header_container">
        <div className={loginCondition ? 'wrapper_logo_searchBlock' : 'wrapper_logo_searchNone'}>
          <div className="header_logo">
            <svg className="logo_icon">
              <use xlinkHref={`${IconsSVG}#logo_fox_library`} />
            </svg>
          </div>

          <svg className="search_icon">
            <use xlinkHref={`${IconsSVG}#search`} />
          </svg>
          <form onBlur={() => dispatch(fetchBooks())} className="header_form">
            <input
              // value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="input_search"
              type="search"
              name="search"
              placeholder="Search by author, title, name"
            ></input>
          </form>
        </div>

        <nav className={loginCondition ? 'nav_headerBlock' : 'nav_headerNone'}>
          <ul className="nav_list">
            <div className={!showNavigation ? 'nav_logoutBlock' : 'nav_logoutNone'}>
              <li onClick={showLogIn} className="nav_item">
                Log In
              </li>
              <li className="nav_item">Sign up</li>
            </div>

            <div className={showNavigation ? 'nav_loginBlock' : 'nav_loginNone'}>
              <li className="nav_item">All books</li>
              <li className="nav_item">Your orders</li>
              <li onClick={showSettings}>
                <svg className="rectangle_user_icon">
                  <use xlinkHref={`${IconsSVG}#rectangle_user`} />
                </svg>
              </li>
              <li>
                <svg className={showSettingsMenu ? 'arrow_iconTop' : 'arrow_iconBottom'}>
                  <use xlinkHref={`${IconsSVG}#arrow`} />
                </svg>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <Settings showSettingsMenu={showSettingsMenu} setShowSettingsMenu={setShowSettingsMenu} />
      <SearchBook filterBooks={filterBooks} />

      {/* <div> */}
      {/*  <button onClick={() => dispatch(fetchBooks())}>get hotels</button> */}
      {/*  /!*<div>*!/ */}
      {/*  /!*  {filterBooks.map((item) => (*!/ */}
      {/*  /!*    <div> {item.name}</div>*!/ */}
      {/*  /!*  ))}*!/ */}
      {/*  /!*</div>*!/ */}
      {/* </div> */}
    </header>
  );
};

export default Header;
