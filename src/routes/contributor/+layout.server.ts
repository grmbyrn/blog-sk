// src/routes/contributor/+layout.server.ts
import { getAllPostsMetadata } from '$lib/data/postMetadata';

export const load = async () => {
	// Await the array of post metadata
	const allMetadata = await getAllPostsMetadata();

	// Map over the metadata array to build the posts array
	const unsorted_posts = allMetadata.map((metadata) => {
		const link = metadata.slug;
		const validDate = new Date(metadata.date);
		if (isNaN(validDate.getTime())) {
			throw new Error(`Invalid date in post: ${link}`);
		}

		// Use coverImage instead of image
		return { link, title: metadata.title, date: validDate, image: metadata.coverImage };
	});

	// Sort posts by date (newest first)
	const posts = unsorted_posts.sort((p, q) => q.date.getTime() - p.date.getTime());

	return { posts };
};
