<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';

	let { titleArr } = $props();
</script>

<div class="card-container">
	{#each titleArr as title}
		<Card {title} />
	{/each}
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	@include bp.for-tablet-portrait-up {
		.card-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 1fr);
			grid-column-gap: 24px;
			grid-row-gap: 2px;
			max-width: 1200px;
			padding-inline: 1.5rem;
		}
	}

	@include bp.for-tablet-landscape-up {
		.card-container {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-column-gap: 24px;
			grid-row-gap: 24px;
		}
	}
</style>
