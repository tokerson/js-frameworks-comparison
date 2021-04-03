<script>
    import Post from '../components/Post.svelte';
	import { getPosts, searchPosts } from '../shared/api';
	import { onMount } from 'svelte';
    import SearchIcon from '../shared/icons/search.svg';
    import '../shared/styles/search.css';
    let posts = [];
    let searchValue = "";

    onMount(() => {
        posts = getPosts();
    })

    const handleSubmit = () => {
        posts = searchPosts(searchValue.trim());
    }
</script>

<form class="search-input-container" on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Search for post" class="search-input" bind:value={searchValue} />
    <button type="submit" class="search-input__button">
        <img
            src={SearchIcon}
            alt="search icon"
            height="14"
            width="14"
        />
    </button>
</form>
{#each posts as post}
	<Post {post} />
{/each}