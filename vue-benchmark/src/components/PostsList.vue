<template>
  <Post v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import Post from './Post.vue';
import '../shared/styles/posts.css';

export default {
  name: 'PostsList',
  components: {
    Post,
  },
  props: ['posts']
};
</script>
