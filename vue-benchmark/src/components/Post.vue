<template>
  <div class="post-container">
    <div class="post__header">
      <img
        :src="post.user.avatar"
        :alt="`avatar of ${post.user.name}`"
        class="post__avatar"
        width="50"
        height="50"
      />
      <div>
        <p class="post__author">{{ post.user.name }}</p>
        <p class="post__date">{{ post.createdAt }}</p>
      </div>
    </div>
    <p>{{ post.content }}</p>
    <router-link
      :to="{
        name: 'Post',
        params: {
          id: post.id,
        },
      }"
      class="post__read-more"
      >Czytaj więcej...</router-link
    >
  </div>
</template>

<script>
import '../shared/styles/posts.css';

export default {
  name: 'PostsList',
  props: {
    post: Object,
  },
};
</script>
