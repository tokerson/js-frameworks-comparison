import React, { useState } from 'react';
import { getPosts, searchPosts } from '../shared/api';
import Post from '../components/Post';
import SearchIcon from '../shared/icons/search.svg';
import '../shared/styles/search.css';

const PostsPage = () => {
  const [posts, setPosts] = useState(getPosts);
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchPosts = (e) => {
    e.preventDefault();
    setPosts(() => searchPosts(searchValue.trim()));
  };

  return (
    <div>
      <form className='search-input-container' onSubmit={handleSearchPosts}>
        <input
          type='text'
          placeholder="Search for post"
          className='search-input'
          value={searchValue}
          onChange={handleChangeSearchValue}
        />
        <button type='submit' className='search-input__button'>
          <img src={SearchIcon} alt='search icon' height={14} width={14} />
        </button>
      </form>
      {posts
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : null}
    </div>
  );
};

export default PostsPage;
