<script lang="ts">
	import { dev } from '$app/environment';

	interface Props {
		src: string;
		alt: string;
		fullBleed?: boolean | undefined;
		formats?: string[];
		widths?: string[] | undefined;
	}

	let {
		src,
		alt,
		fullBleed = undefined,
		formats = ['avif', 'webp', 'png'],
		widths = undefined
	}: Props = $props();

	let fileName = $derived(src.split('.')[0]);

	function buildSrcset() {
		if (dev) return;

		let srcset = '';
		const fileExtension = src.split('.').pop() || '';

		if (widths) {
			for (let i = 0; i < widths.length; i++) {
				srcset += `${fileName}-${widths[i]}.${fileExtension} ${widths[i]}w`;

				if (i < widths.length - 1) {
					srcset += ', ';
				}
			}
		} else {
			for (let i = 0; i < formats.length; i++) {
				srcset += `${fileName}.${fileExtension}`;

				if (i < formats.length - 1) {
					srcset += ', ';
				}
			}
		}

		return srcset;
	}
</script>

<img
	srcset={buildSrcset()}
	{src}
	{alt}
	loading="lazy"
	decoding="async"
	class:full-bleed={fullBleed}
/>

<style lang="scss">
	img {
		width: 100%;
		object-fit: contain;
	}
</style>
