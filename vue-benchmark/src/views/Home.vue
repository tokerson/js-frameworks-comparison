<template>
  <div>
    <div class="posts-search-bar-container">
      <form class="search-input-container" @submit.prevent="this.handleSubmit">
        <input
          type="text"
          placeholder="Search for post"
          class="search-input"
          v-model="searchValue"
        />
        <button type="submit" class="search-input__button">
          <img
            src="@/shared/icons/search.svg"
            alt="search icon"
            :height="14"
            :width="14"
          />
        </button>
      </form>
      <select v-model="sortOption" v-on:change="this.handleSortOptionChange" class="post-sort__select">
        <option
          v-for="option in sortOptions"
          :key="option.value"
          v-bind:value="option.value"
          >{{ option.label }}</option
        >
      </select>
    </div>
    <PostsList :posts="this.posts" />
  </div>
</template>

<script>
import { getPosts } from '../shared/api';
import { SORT_OPTIONS } from '../shared/helpers/sortOptions';
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
      sortOption: SORT_OPTIONS[0].value,
      sortOptions: SORT_OPTIONS,
    };
  },
  methods: {
    handleFetchPosts: function() {
      return getPosts({
        sortOption: this.sortOption,
        searchTerm: this.searchValue.trim(),
      });
    },
    handleSubmit: function() {
      this.posts = this.handleFetchPosts();
    },
    handleSortOptionChange: function() {
      this.posts = this.handleFetchPosts();
    },
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
