<script lang="ts">
	import Tree from './Tree.svelte';
	import { type TableOfContentsItem, type TableOfContentsElements, melt } from '@melt-ui/svelte';

	interface Props {
		tree?: TableOfContentsItem[];
		activeHeadingIdxs: number[];
		item: TableOfContentsElements['item'];
		level?: number;
	}

	let { tree = [], activeHeadingIdxs, item, level = 1 }: Props = $props();
</script>

<ul class="mt-0 list-none {level !== 1 ? 'pl-4' : ''}">
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			<li class="mt-0 pt-2">
				<a
					href="#{heading.id}"
					use:melt={$item(heading.id)}
					class="inline-flex items-center justify-center gap-1 text-white no-underline transition-colors
             hover:text-[rgba(255,_49,_0,_1)] data-[active]:text-[rgba(255,_49,_0,_1)] break-keep"
				>
					<!-- Along with the heading title, the original heading node
              is also passed down, so you can display headings
              however you want. -->
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html heading.node.innerHTML}
				</a>
				{#if heading.children && heading.children.length}
					<Tree tree={heading.children} level={level + 1} {activeHeadingIdxs} {item} />
				{/if}
			</li>
		{/each}
	{/if}
</ul>

<style>
	ul {
		margin: 0;
	}
</style>
