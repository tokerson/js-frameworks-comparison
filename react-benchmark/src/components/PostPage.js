import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostPage = ({ location }) => {
  return <Post post={location.state.post} isOpen />;
};

PostPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PostPage;
