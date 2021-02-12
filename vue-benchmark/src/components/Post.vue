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
    <p>{{ postContent }}</p>
    <router-link
      :to="{
        name: 'PostView',
        params: {
          id: post.id,
        },
      }"
      class="post__read-more"
      v-show="!this.isOpen"
      >Czytaj więcej...</router-link
    >
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { shortenPostContent } from '@/shared/helpers/formatters';
import '@/shared/styles/posts.css';

export default defineComponent({
  name: 'Post',
  props: {
    post: Object,
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    postContent: function() {
      return this.isOpen
        ? this.post.content
        : shortenPostContent(this.post.content);
    },
  },
});
</script>
