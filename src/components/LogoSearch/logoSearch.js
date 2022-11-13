import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../SearchInput/searchInput';
// import { fetchBooks } from '../../store/booksReducer';
import allAction from '../../store/actions';
import IconsSVG from '../../assets/img/sprite.svg';
import './logoSearch.css';

const LogoSearch = () => {
  const isShowContent = useSelector((state) => state.reducerContent.isShow);
  const loginCondition = useSelector((state) => state.reducerLogIn.isLogin);
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiReducer.response);

  function showSearchResult(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim().toLowerCase();

    if (!isShowContent) {
      alert('Please login to your profile or register.');
      return;
    }

    if (inputValue.length === 0) {
      return;
    }

    // dispatch(fetchBooks());

    const filterBooks = apiResult.filter(
      (book) => book.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        book.author.toLowerCase().includes(inputValue.toLowerCase()),
    );

    dispatch(allAction.getBooksSearch(filterBooks));
  }

  function searchSubmit(e) {
    e.preventDefault();
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
      {isShowContent ? (
        <Link to={'/search'}>
          <SearchInput searchSubmit={searchSubmit} showSearchResult={showSearchResult}/>
        </Link>
      ) : (
        <SearchInput searchSubmit={searchSubmit} showSearchResult={showSearchResult}/>
      )}
    </div>
  );
};

export default LogoSearch;
