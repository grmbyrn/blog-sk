<script lang="ts">
	import type { PostMetadata } from '$lib/data/postMetadata';

	export let currentPage: string;
	// Now, "meta" is the current post's metadata and "allMetadata" is an array of PostMetadata
	export let data: {
		meta: PostMetadata;
		allMetadata: PostMetadata[];
	};

	// Create a sorted copy of allMetadata by date (newest first)
	$: sortedPosts = data.allMetadata
		.slice()
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	// Find the index of the current post in the sorted array
	$: currentIndex = sortedPosts.findIndex((post) => post.slug === currentPage);

	// Get the previous and next posts based on the current index
	$: prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
	$: nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
</script>

<div class="container">
	<div class="previousPost">
		{#if prevPost}
			<div class="arrow arrowPrevious">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				<a href="/blog/{prevPost.slug}">{prevPost.title}</a>
			</div>
		{:else}
			<p class="inactive">You are reading our most recent post.</p>
		{/if}
	</div>
	<div class="nextPost">
		{#if nextPost}
			<div class="arrow arrowNext">
				<a href="/blog/{nextPost.slug}">{nextPost.title}</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</div>
		{:else}
			<p class="inactive">You're up to date. More to come soon!</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2.5rem;
		border: 1px solid rgba(245, 245, 245, 0.08);
	}

	.previousPost,
	.nextPost {
		flex: 1;
		padding: 1.5rem 0;
	}

	.nextPost {
		text-align: right;
	}

	.previousPost {
		text-align: left;
	}

	a {
		text-decoration: none;
		color: rgba(245, 245, 245, 0.96);
		font-weight: 500;

		&:hover {
			color: rgba(255, 49, 0, 1);
		}
	}

	.arrow {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.arrowNext {
		justify-content: flex-end;
	}

	.arrowPrevious {
		justify-content: flex-start;
	}

	.icon {
		width: 24px;
		height: 24px;
		stroke-width: 2;
	}

	.inactive {
		color: gray;
		font-size: 16px;
	}
</style>
