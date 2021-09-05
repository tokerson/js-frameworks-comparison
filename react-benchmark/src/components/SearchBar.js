import React, { useState, useEffect } from 'react';
import { SORT_OPTIONS } from '../shared/helpers/sortOptions';
import SearchIcon from '../shared/icons/search.svg';
import { getPosts } from '../shared/api';

const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState(
    SORT_OPTIONS[0].value
  );

  useEffect(() => {
    handleRefetchPosts();
  }, [selectedSortOption]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRefetchPosts();
  };

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleRefetchPosts = () => {
    const newPosts = getPosts({
      sortOption: selectedSortOption,
      searchTerm: searchValue.trim(),
    });
    onSubmit(newPosts);
  };

  const handleSortOptionChange = (e) => {
    setSelectedSortOption(e.target.value);
  };

  return (
    <div className='posts-search-bar-container'>
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
      <select
        value={selectedSortOption}
        onChange={handleSortOptionChange}
        className='post-sort__select'
      >
        {SORT_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
