<script lang="ts">
	export let data;
	const { posts } = data;
</script>

<svelte:head>
	<title>Blog with SvelteKit without markdown</title>
</svelte:head>

<div class="container">
	<div class="header">
		<h2>All Posts</h2>
	</div>
	<div class="grid">
		{#each posts as post}
		<div class="link">
			<a href="/post/{post.link}">
				{#if post.image}
					<img src={post.image} alt="">
				{/if}
				{post.title}
			</a>
		</div>
		{/each}
	</div>
</div>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding-top: 3rem;
		background: rgba(26, 26, 26, 1);
		color: rgba(245, 245, 245, 0.96);
		padding-bottom: 64px;		
	}
	
	img{
		height: 150px;
	}

	.grid {
		display: grid;
		padding-top: 3rem;
		padding-inline: 2.5rem;
		grid-template-columns: 1fr 1fr;
		grid-gap: 24px;
		width: 100%;
		flex-grow: 1;
	}

	a{
		display: flex;
		flex-direction: column;
		color: white;
		text-decoration: none;
	}
</style>
