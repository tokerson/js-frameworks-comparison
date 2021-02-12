<template>
  <div>
    <form class="search-input-container" @submit="this.handleSubmit">
      <input type="text" class="search-input" v-model="this.searchValue" />
      <button type="submit" class="search-input__button">
        <img
          src="@/shared/icons/search.svg"
          alt="search icon"
          :height="14"
          :width="14"
        />
      </button>
    </form>
    <PostsList :posts="this.posts"/>
  </div>
</template>

<script>
import { getPosts, searchPosts } from '../shared/api';
import PostsList from '@/components/PostsList.vue';
import '@/shared/styles/search.css';

export default {
  name: 'Home',
  components: {
    PostsList,
  },
  data() {
    return {
      posts: getPosts(),
      searchValue: '',
    };
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      this.posts = searchPosts(this.searchValue.trim());
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
