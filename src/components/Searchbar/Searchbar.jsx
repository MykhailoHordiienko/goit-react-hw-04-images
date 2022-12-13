import React from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <button type="submit" className="search-button">
          <FcSearch width={20} />
          <span>Search</span>
        </button>

        <input
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
