import Posts from '../data.json';
import { SORT_FILTERS, SORT_OPTIONS } from '../helpers/sortOptions';

export const getPosts = ({ sortOption, searchTerm }) => {
  const posts = searchTerm ? searchPosts(searchTerm) : Posts;
  if (!sortOption || sortOption === SORT_OPTIONS[0].value) return posts;

  return sortPosts(posts, { sortOption });
};

const sortPosts = (posts, { sortOption }) => {
  let sortOrderModifier = 0;
  switch (sortOption) {
    case SORT_FILTERS.OLDEST:
      sortOrderModifier = -1;
      break;
    case SORT_FILTERS.NEWEST:
      sortOrderModifier = 1;
      break;
    default:
      break;
  }
  return posts.sort((a, b) => {
    const firstItemDate = new Date(...a.createdAt.split('/').reverse());
    const secondItemDate = new Date(...b.createdAt.split('/').reverse());

    if (firstItemDate < secondItemDate) {
      return -1 * sortOrderModifier;
    } else if (firstItemDate === secondItemDate) {
      return 0;
    } else {
      return 1 * sortOrderModifier;
    }
  });
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
