import Posts from '../data.json';

export const getPosts = () => {
  return Posts;
};

export const getPost = (id) => {
  return Posts.find((post) => post.id === id);
};
