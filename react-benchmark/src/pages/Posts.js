import React, { useState, useEffect } from 'react';
import { getPosts } from '../shared/api';
import Post from '../components/Post';
import SearchIcon from '../shared/icons/search.svg';
import { SORT_OPTIONS } from '../shared/helpers/sortOptions';
import '../shared/styles/search.css';

const PostsPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState(
    SORT_OPTIONS[0].value,
  );
  const [posts, setPosts] = useState(() =>
    getPosts({ sortOption: selectedSortOption }),
  );

  useEffect(() => {
    setPosts(() =>
      getPosts({
        sortOption: selectedSortOption,
        searchTerm: searchValue.trim(),
      }),
    );
  }, [selectedSortOption]);

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchPosts = (e) => {
    e.preventDefault();
    setPosts(() =>
      getPosts({
        sortOption: selectedSortOption,
        searchTerm: searchValue.trim(),
      }),
    );
  };

  const handleSortOptionChange = (e) => {
    setSelectedSortOption(e.target.value);
  };

  return (
    <div>
      <div className='posts-search-bar-container'>
        <form className='search-input-container' onSubmit={handleSearchPosts}>
          <input
            type='text'
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
      {posts ? posts.map((post) => <Post key={post.id} post={post} />) : null}
    </div>
  );
};

export default PostsPage;
