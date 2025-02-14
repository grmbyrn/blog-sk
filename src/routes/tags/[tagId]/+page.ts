import { postsMetadata } from '$lib/data/postMetadata';
import { error } from '@sveltejs/kit';

export function load({ url }) {
	// Extract the tag from the last part of the URL
	const tag = url.pathname.split('/').filter(Boolean).pop();

	if (!tag) {
		throw error(400, 'Tag is missing in the URL');
	}

	// Find posts that have this tag
	const filteredPosts = Object.values(postsMetadata).filter((post) => post.tags.includes(tag));

	// If no posts match, return a 404 error
	if (filteredPosts.length === 0) {
		throw error(404, `No posts found for tag: ${tag}`);
	}

	return { tag, filteredPosts };
}
