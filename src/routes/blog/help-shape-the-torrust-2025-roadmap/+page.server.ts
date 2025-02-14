import fs from 'fs';
import path from 'path';
import type { PageServerLoad } from '../$types';
import type { BlogMetadata } from '$lib/utils/types';

export const load: PageServerLoad = async ({ url }) => {
	const slug = url.pathname.split('/').filter(Boolean).pop();

	if (!slug) {
		throw new Error('Slug could not be determined.');
	}

	const metadataPath = path.resolve('static/blogMetadata.json');

	if (!fs.existsSync(metadataPath)) {
		throw new Error("Metadata file not found. Run 'npm run generate-metadata'.");
	}

	const metadata: BlogMetadata[] = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));

	const currentPost = metadata.find((post) => post.slug === slug);

	if (!currentPost) {
		throw new Error(`Post not found: ${slug}`);
	}

	return { currentPost, allPosts: metadata };
};
