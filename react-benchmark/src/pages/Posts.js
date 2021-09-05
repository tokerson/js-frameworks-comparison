import React, { useState } from 'react';
import { getPosts } from '../shared/api';
import Post from '../components/Post';
import '../shared/styles/search.css';
import SearchBar from '../components/SearchBar';

const PostsPage = () => {
  const [posts, setPosts] = useState(() => getPosts());

  const handleSubmit = (newPosts) => {
    setPosts(newPosts);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {posts?.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
};

export default PostsPage;
