<script lang="ts">
	export let data;
	const { posts } = data;
	console.log(posts)
</script>

<svelte:head>
	<title>Blog with SvelteKit without marekdown</title>
</svelte:head>

<section>
	<h2>All Posts</h2>

	<ul>
		{#each posts as post}
			<li>
				<a href="/post/{post.link}">
					{#if post.image}
						<img src={post.image} alt="">
					{/if}
					{post.title}
				</a>
				&ndash;
				<span class="date"
					>{post.date.toLocaleDateString()}</span
				>
			</li>
		{/each}
	</ul>
	<p>
		Check out the code on <a
			href="https://github.com/ScriptRaccoon/blog-sveltekit-approach"
			target="_blank"
		>
			GitHub</a
		>.
	</p>
</section>

<style>
	ul {
		margin-left: 1rem;
	}
	
	img{
		height: 150px;
	}
</style>
