<script lang="ts">
	import { postsMetadata } from '$lib/data/postMetadata';
	import BlogPreview from '$lib/components/molecules/BlogPreview.svelte';
	import SearchBar from '$lib/components/singletons/SearchBar.svelte';
	// Convert posts object to array
    let allPosts = Object.values(postsMetadata);
    let filteredPosts = allPosts;
    function handleSearch(event: CustomEvent<string>) {
        const searchTerm = event.detail.toLowerCase();
        
        if (!searchTerm) {
            filteredPosts = allPosts;
            return;
        }
        filteredPosts = allPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm)
        );
    }
</script>

<svelte:head>
	<title>Blog with SvelteKit without markdown</title>
</svelte:head>

<div class="container">
	<div class="header">
		<h2>All Posts</h2>
		<SearchBar on:search={handleSearch} />
	</div>
	<div class="grid">
		{#each filteredPosts as post}
			<a href="/blog/{post.slug}">
				{#if post.coverImage}
					<BlogPreview post_data={post} />
				{/if}
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

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

		@include bp.for-desktop-up {
			max-width: 1176px;
		}
	}

	.header {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		margin: 0 auto;

		@include bp.for-phone-only {
			flex-direction: column;
			text-align: center;
		}

		@include bp.for-tablet-portrait-up {
			width: 700px;
		}

		@include bp.for-desktop-up {
			width: 1100px;
		}

		h1 {
			padding-bottom: 1rem;
			font-size: 36px;

			@include bp.for-tablet-portrait-up {
				padding-bottom: 0px;
			}
		}

		@include bp.for-tablet-portrait-up {
			display: flex;
			justify-content: space-between;
		}
	}

	.grid {
		display: grid;
		padding-top: 3rem;
		padding-inline: 2.5rem;
		grid-template-columns: 1fr 1fr;
		grid-gap: 24px;
		width: 100%;
		flex-grow: 1;

		@include bp.for-phone-only {
			grid-template-columns: 1fr;
		}

		@include bp.for-tablet-landscape-up {
			grid-template-columns: 1fr 1fr;
		}

		@include bp.for-desktop-up {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
