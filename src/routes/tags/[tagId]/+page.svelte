<script lang="ts">
    export let data;
    import TagCard from '$lib/components/atoms/TagCard.svelte'

    const { tag, filteredPosts } = data;
</script>

<div class="container">
    {#if filteredPosts && filteredPosts.length}
        <h1>{tag}</h1>
		<TagCard {filteredPosts}/>
    {:else}
        <p>No posts found for this tag.</p>
    {/if}
</div>

<style lang="scss">
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin: 0 auto;
		padding-inline: 2.5rem;

		h1 {
			padding: 2rem;
			text-align: center;
			font-size: 2rem;
		}
	}
</style>
