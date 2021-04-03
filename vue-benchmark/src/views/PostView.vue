<template>
  <div>
    <Post :post="post" :isOpen="true" />
  </div>
</template>

<script>
import Post from '@/components/Post.vue';
import { getPost } from '@/shared/api';
import '@/shared/styles/posts.css';
export default {
  name: 'PostView',
  components: {
    Post,
  },
  data() {
    return {
      post: getPost(this.$route.params.id),
    };
  },
};
</script>
