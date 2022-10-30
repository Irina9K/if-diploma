import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IconsSVG from '../../../assets/img/sprite.svg';
import { fetchBooks } from '../../../store/reducerBooks';
import './logoSearch.css';

const LogoSearch = ({ setBookSearch }) => {
  const books = useSelector((state) => state.booksReducer.books);
  const isShowContent = useSelector((state) => state.reducerContent.isShow);
  const loginCondition = useSelector((state) => state.reducerLogIn.isLogin);
  const dispatch = useDispatch();

  function showSearchResult(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim().toLowerCase();

    if (!isShowContent) {
      alert('Please login to your profile or register.');
      return;
    }
    console.log(inputValue.length);

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

  return (
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
  );
};

export default LogoSearch;
