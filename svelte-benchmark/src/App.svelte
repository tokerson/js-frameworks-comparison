<script>
	import { Router } from "svelte-routing";
	import PostPage from './pages/PostPage.svelte';
	import PostsPage from './pages/PostsPage.svelte';
	import Route from './components/Route.svelte';
</script>

<Router>
	<Route path="/posts/:id" let:params>
		<PostPage postId="{params.id}" />
	</Route>
	<Route path="/" component={PostsPage} />
</Router>

