import { getAllPostsMetadata } from '$lib/data/postMetadata';
import type { PostMetadata } from '$lib/data/postMetadata';

export const load = async () => {
	// Await all metadata as an array
	const allMetadata: PostMetadata[] = await getAllPostsMetadata();

	// Get all blog post paths (assuming each blog post has a +page.svelte)
	const postsPaths = Object.keys(
		import.meta.glob('/src/routes/blog/*/+page.svelte')
	);

	// Build a set of slugs from the blog post paths
	const validSlugs = new Set(
		postsPaths.map((path) => path.split('/').at(-2) ?? '')
	);

	// Filter the metadata to include only posts that have a corresponding +page.svelte file
	const validMetadata = allMetadata.filter((meta) => validSlugs.has(meta.slug));

	// Map over the valid metadata to build your posts array
	const unsortedPosts = validMetadata.map((meta) => {
		const validDate = new Date(meta.date);
		if (isNaN(validDate.getTime())) {
			throw new Error(`Invalid date in post: ${meta.slug}`);
		}
		return {
			slug: meta.slug,
			title: meta.title,
			date: validDate,
			coverImage: meta.coverImage
		};
	});

	// Sort posts by date (newest first)
	const posts = unsortedPosts.sort((a, b) => b.date.getTime() - a.date.getTime());

	return { posts };
};
