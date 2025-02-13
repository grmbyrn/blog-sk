// src/routes/tags/[tagId]/+page.ts
import { getAllPostsMetadata } from '$lib/data/postMetadata';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	// Extract the tag from the last part of the URL
	const tag = url.pathname.split('/').filter(Boolean).pop();

	if (!tag) {
		throw error(400, 'Tag is missing in the URL');
	}

	// Retrieve all posts metadata as an array
	const allMetadata = await getAllPostsMetadata();

	// Filter posts that include the specified tag
	const filteredPosts = allMetadata.filter(post => post.tags.includes(tag));

	if (filteredPosts.length === 0) {
		throw error(404, `No posts found for tag: ${tag}`);
	}

	return { tag, filteredPosts };
}
