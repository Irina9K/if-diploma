import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { fetchBooks } from '../../store/reducerBooks';

import IconsSVG from '../../assets/img/sprite.svg';
import './header.css';
import '../../assets/css/style.css';
import Auth from '../Auth/auth';
import { logOutAction } from '../../store/actions';
import SettingsMenu from '../Settings/SettingsMenu/settingsMenu';
import SearchBook from '../SearchBook/searchBook';

const Header = () => {
  const [showNavigation, setshowNavigation] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [booksSearch, setBookSearch] = useState([]);
  // const [display, setDisplay] = useState('none');
  // const [displayError, setDisplayError] = useState('none');
  const loginCondition = useSelector((state) => state.reducerLogIn.isLogin);
  const isShowContent = useSelector((state) => state.reducerContent.isShow);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);

  console.log(showNavigation);
  console.log(loginCondition);

  function showSearchResult(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim().toLowerCase();

    if (!isShowContent) {
      alert('Please login to your profile or register.');
      return;
    }

    if (inputValue.length === 0) {
      // setDisplayError('block');
      // setDisplay('none');
      return;
    }

    dispatch(fetchBooks());

    const filterBooks = books.filter(
      (book) => book.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        book.author.toLowerCase().includes(inputValue.toLowerCase()),
    );

    setBookSearch(filterBooks);
    // setDisplayError('none');
    // setDisplay('block');
  }

  function showLogIn() {
    dispatch(logOutAction());
  }

  function showLogOut() {
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
          <Link to={'/'}>
            <div className="header_logo">
              <svg className="logo_icon">
                <use xlinkHref={`${IconsSVG}#logo_fox_library`} />
              </svg>
            </div>
          </Link>

          <svg className="search_icon">
            <use xlinkHref={`${IconsSVG}#search`} />
          </svg>
          <form /* onBlur={() => dispatch(fetchBooks())} */ className="header_form">
            <input
              // value={inputValue}
              onChange={showSearchResult}
              className="input_search"
              type="search"
              name="search"
              placeholder="Search by author, title, name"
              required
            ></input>
          </form>
        </div>

        <nav className={loginCondition ? 'nav_headerBlock' : 'nav_headerNone'}>
          <ul className="nav_list">
            <div className={!showNavigation ? 'nav_logoutBlock' : 'nav_logoutNone'}>
              <li onClick={showLogIn} className="nav_item">
                Log In
              </li>
              <li onClick={showLogOut} className="nav_item">
                Sign up
              </li>
            </div>

            <div className={showNavigation ? 'nav_loginBlock' : 'nav_loginNone'}>
              <li className="nav_item">
                <NavLink to={'books'} className={({ isActive }) => isActive && 'active'}>
                  All books
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to={'orders'}>Your orders</NavLink>
              </li>
              <li onClick={showSettings}>
                <svg className="rectangle_user_icon">
                  <use xlinkHref={`${IconsSVG}#user`} />
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
      <SettingsMenu showSettingsMenu={showSettingsMenu} setShowSettingsMenu={setShowSettingsMenu} />
      <SearchBook booksSearch={booksSearch} bookId={booksSearch.id} />
    </header>
  );
};

export default Header;
