import React, { useState, useEffect } from 'react';
import { getPosts } from '../shared/api';
import Post from '../components/Post';
import { SORT_OPTIONS } from '../shared/helpers/sortOptions';
import '../shared/styles/search.css';
import SearchInput from '../components/SearchInput';

const PostsPage = () => {
  const [posts, setPosts] = useState(() => getPosts());
  const [selectedSortOption, setSelectedSortOption] = useState(
    SORT_OPTIONS[0].value,
  );

  useEffect(() => {
    handleRefetchPosts();
  }, [selectedSortOption]);

  const handleRefetchPosts = ({ searchTerm = '' } = {}) => {
    setPosts(() =>
      getPosts({
        sortOption: selectedSortOption,
        searchTerm: searchTerm.trim(),
      }),
    );
  };

  const handleSortOptionChange = (e) => {
    setSelectedSortOption(e.target.value);
  };

  return (
    <>
      <div className='posts-search-bar-container'>
        <SearchInput onSubmit={handleRefetchPosts}/>
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
      {posts?.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
};

export default PostsPage;
