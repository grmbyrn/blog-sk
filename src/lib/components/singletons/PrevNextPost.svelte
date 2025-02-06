<script lang="ts">
    import type { postsMetadata } from '$lib/data/postMetadata';
    
    export let currentPage: string;
    export let data: {
        meta: typeof postsMetadata[keyof typeof postsMetadata];
        allMetadata: typeof postsMetadata;
    };
    // Convert posts object to array and sort by date
    $: sortedPosts = Object.values(data.allMetadata).sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    // Find current post index
    $: currentIndex = sortedPosts.findIndex(post => post.slug === currentPage);
    // Get prev and next posts
    $: prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
    $: nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
</script>
<div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-2 gap-4">
        <div class="text-left">
            {#if prevPost}
                <div class="flex items-center space-x-2">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6" 
                        fill="none" 
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
                    <a 
                        href="/blog/{prevPost.slug}"
                        class="hover:text-blue-500 transition-colors"
                    >
                        {prevPost.title}
                    </a>
                </div>
            {:else}
                <p class="text-gray-500">You are reading our most recent post.</p>
            {/if}
        </div>
        <div class="text-right">
            {#if nextPost}
                <div class="flex items-center justify-end space-x-2">
                    <a 
                        href="/blog/{nextPost.slug}"
                        class="hover:text-blue-500 transition-colors"
                    >
                        {nextPost.title}
                    </a>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M9 5l7 7-7 7" 
                        />
                    </svg>
                </div>
            {:else}
                <p class="text-gray-500">You're up to date. More to come soon!</p>
            {/if}
        </div>
    </div>
</div>


<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		border: 1px solid rgba(245, 245, 245, 0.08);
		padding-inline: 2.5rem;
	}

	.nextPost,
	.previousPost {
		flex: 1;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	.nextPost {
		text-align: right;
	}

	.previousPost {
		text-align: left;
	}

	a {
		word-break: keep-all;
	}

	.arrow {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.arrow a {
		color: rgba(245, 245, 245, 0.96);
	}

	.arrow a:hover {
		color: rgba(255, 49, 0, 1);
	}

	.arrowNext {
		justify-content: flex-end;
	}

	.arrowPrevious {
		justify-content: flex-start;
	}

	.inactive {
		color: gray;
		font-size: 16px;
	}
</style>
