<script>
    import Post from '../components/Post.svelte';
	import { getPosts } from '../shared/api';
    import { SORT_OPTIONS } from '../shared/helpers/sortOptions';
    import SearchIcon from '../shared/icons/search.svg';
    import '../shared/styles/search.css';

    let posts = getPosts();
    let searchValue = "";
    let selectedSortOption = SORT_OPTIONS[0].value;

    const handleFetchPosts = () => getPosts({ sortOption: selectedSortOption,searchTerm: searchValue.trim()});

    const handleSubmit = () => {
        posts = handleFetchPosts();
    }
</script>

<div class="posts-search-bar-container">
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
    <!-- svelte-ignore a11y-no-onchange -->
    <select bind:value={selectedSortOption} class="post-sort__select" on:change={handleSubmit}>
        {#each SORT_OPTIONS as sortOption}
            <option value={sortOption.value} >{ sortOption.label }</option>
        {/each} 
    </select>
</div>
{#each posts as post}
	<Post {post} />
{/each}