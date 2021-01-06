<template>
  <Post v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import Posts from '../shared/data.json';
import Post from './Post.vue';
import '../shared/styles/posts.css';

export default {
  name: 'PostsList',
  components: {
    Post,
  },
  props: {},
  data() {
    return {
      posts: Posts,
    };
  },
};
</script>
