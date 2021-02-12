<script>
    import Post from '../components/Post.svelte';
	import {getPosts} from '../shared/api';
	import { onMount } from 'svelte';

    let posts = [];

    onMount(() => {
        posts = getPosts();
    })
</script>

{#each posts as post}
	<Post {post} />
{/each}