<template>
  <PostsList />
</template>

<script>
import PostsList from '@/components/PostsList.vue';

export default {
  name: 'Home',
  components: {
    PostsList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
