import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { shortenPostContent } from '../shared/helpers/formatters';

const Post = ({ post, isOpen = false }) => {
  const { id, user, createdAt } = post;
  const content = isOpen ? post.content : shortenPostContent(post.content);
  return (
    <div className='post-container'>
      <div className='post__header'>
        <p className='post__author'>{user.name}</p>
        <p className='post__date'>{createdAt}</p>
      </div>
      <p>{content}</p>
      {!isOpen ? (
        <Link className='post__read-more' to={`posts/${id}`}>
          Czytaj więcej...
        </Link>
      ) : null}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
};

export default Post;
