<script>
    import { Link } from 'svelte-routing';
    import { shortenPostContent } from '../shared/helpers/formatters';
	import '../shared/styles/posts.css';

    export let post;
    export let isOpen = false;
</script>

<div class='post-container'>
    <div class='post__header'>
      <p class='post__author'>{post.user.name}</p>
      <p class='post__date'>{post.createdAt}</p>
    </div>
    
    {#if !isOpen}
      <p>{shortenPostContent(post.content)}</p>
      <Link class='post__read-more' to={`posts/${post.id}`}>
        Czytaj więcej...
      </Link>
    {:else}
      <p>{post.content}</p>
    {/if}
  </div>