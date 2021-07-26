import React, { useState } from 'react';
import SearchIcon from '../shared/icons/search.svg';

const SearchInput = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ searchTerm: searchValue });
  };

  return (
    <form className='search-input-container' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search for post'
        className='search-input'
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
      <button type='submit' className='search-input__button'>
        <img src={SearchIcon} alt='search icon' height={14} width={14} />
      </button>
    </form>
  );
};

export default SearchInput;
