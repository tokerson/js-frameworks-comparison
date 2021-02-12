<template>
  <div>
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
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
