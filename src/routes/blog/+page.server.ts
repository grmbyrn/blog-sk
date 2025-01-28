import { postsMetadata } from '$lib/data/postMetadata';

export const load = async () => {
	const posts_paths = Object.keys(import.meta.glob('/src/routes/blog/*/+page.svelte'));

	const unsorted_posts = await Promise.all(
		posts_paths.map(async (path) => {
			const link = path.split('/').at(-2) ?? '';
			const metadata = postsMetadata[link] || { title: 'Unknown Title', date: '', image: '' };

			const validDate = new Date(metadata.date);
			if (isNaN(validDate.getTime())) {
				throw new Error(`Invalid date in post: ${link}`);
			}

			return { link, title: metadata.title, date: validDate, image: metadata.image };
		})
	);

	// Sort posts by date
	const posts = unsorted_posts.sort((p, q) => q.date.getTime() - p.date.getTime());

	return { posts };
};
