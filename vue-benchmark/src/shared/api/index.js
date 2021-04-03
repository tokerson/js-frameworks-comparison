import Posts from '../data.json';

export const getPosts = () => {
  return Posts;
};

export const getPost = (id) => {
  return Posts.find((post) => post.id === +id);
};

export const searchPosts = (searchString) => {
  return Posts.filter((post) => {
    const regexToMatch = new RegExp(searchString, 'i');
    return (
      post.user.name.match(regexToMatch) || post.content.match(regexToMatch)
    );
  });
};
