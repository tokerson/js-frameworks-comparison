import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ id, user, createdAt, content }) => {
  return (
    <div key={id} className='post-container'>
      <div className='post__header'>
        <img
          src={user.avatar}
          alt={`avatar of ${user.name}`}
          className='post__avatar'
          width={50}
          height={50}
        />
        <div>
          <p className='post__author'>{user.name}</p>
          <p className='post__date'>{createdAt}</p>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
