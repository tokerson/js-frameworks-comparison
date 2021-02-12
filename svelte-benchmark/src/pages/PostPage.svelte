<script>
    import Post from '../components/Post.svelte';
	import {getPost} from '../shared/api';

    export let postId;

    let post = getPost(postId);

</script>

<Post {post} isOpen={true} />