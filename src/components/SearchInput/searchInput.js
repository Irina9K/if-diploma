import React from 'react';
import IconsSVG from '../../assets/img/sprite.svg';

const SearchInput = ({ searchSubmit, showSearchResult }) => (
    <div className="wrapper_search">
      <svg className="search_icon">
        <use xlinkHref={`${IconsSVG}#search`} />
      </svg>
      <form
        onSubmit={(e) => {
          searchSubmit(e);
        }}
        className="header_form"
      >
        <input
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

export default SearchInput;
