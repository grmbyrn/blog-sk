<script lang="ts">
    import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';

    const dispatch = createEventDispatcher<{
        search: string;
    }>();

    let searchTerm = '';

    function handleSearch() {
        dispatch('search', searchTerm);
    }

    function handleInput() {
        handleSearch();
    }
</script>

<div class="search-bar-container">
		<div class="input-wrapper">
			<div >
				<input
					type="text"
					bind:value={searchTerm}
					on:input={handleInput}
					placeholder="Type to filter articles"
				/>
			</div>
			<div>
				<Icon
					icon="heroicons:magnifying-glass-16-solid"
					width="28"
					height="28"
					style="color: rgba(245, 245, 245, 0.08);"
				/>
			</div>
		</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.search-bar-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		background-color: transparent;
		border: 1px solid rgba(245, 245, 245, 0.08);
		border-radius: 1.5rem;

		@include bp.for-phone-only {
			width: 300px;
		}
	}

	.input-wrapper {
		display: flex;
		justify-content: space-between;
		width: 360px;
		border-radius: 5px;
		padding: 0.5rem;
		border: none;
		outline: none;
		color: white;
		background-color: transparent;

		div {
			display: flex;
			align-items: center;
		}
	}

	.input-wrapper input {
		border: none;
		outline: none;
		flex-grow: 1;
		font-size: 1rem;
		background-color: transparent;
		color: rgba(245, 245, 245, 0.96);

		&:focus {
			outline: none;
			box-shadow: none;
		}
	}

	.input-wrapper > * {
		padding-inline: 1rem;
	}
</style>