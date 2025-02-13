import { getAllPostsMetadata, type PostMetadata } from "$lib/data/postMetadata";

export const _meta: PostMetadata = {
	title: 'How To Contribute To This Site',
	slug: 'how-to-contribute-to-this-site',
	contributor: 'Jose Celano',
	contributorSlug: 'jose-celano',
	date: '2023-04-22T21:55:15.361Z',
	coverImage: '/images/posts/sample-post.jpg',
	excerpt: 'How to manage existing blog posts and create new ones on this site.',
	tags: ['Documentation']
};

export async function load() {
	const allMetadata: PostMetadata[] = await getAllPostsMetadata();
	return { _meta, allMetadata };
}