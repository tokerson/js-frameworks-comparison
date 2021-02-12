import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { getPost } from '../shared/api';

const PostPage = ({ match }) => {
  const [post, ] = useState(() => getPost(match.params.id));
  return <Post post={post} isOpen />;
};

PostPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PostPage;
