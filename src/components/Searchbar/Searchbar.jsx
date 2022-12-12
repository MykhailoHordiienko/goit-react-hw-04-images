import React from 'react';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = () => {
  return (
    <header class="searchbar">
      <form class="form">
        <button type="submit" class="search-button">
          <FcSearch width={20} />
          <span>Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
