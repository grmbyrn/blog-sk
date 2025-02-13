import { getAllPostsMetadata, type PostMetadata } from "$lib/data/postMetadata";

export const _meta: PostMetadata = {
		title: 'What is a BitTorrent tracker and types of trackers',
		slug: 'what-is-a-bittorent-tracker',
		contributor: 'Jose Celano',
		contributorSlug: 'jose-celano',
		date: '2023-10-05T13:42:25.671Z',
		coverImage: '/images/posts/tracker.jpg',
		excerpt: 'Basic explanation of what a BitTorrent tracker is and the two types of trackers, public and private.',
		tags: ['Torrent', 'Tracker', 'BitTorrent']
	};

export async function load() {
	const allMetadata: PostMetadata[] = await getAllPostsMetadata();
	return { _meta, allMetadata };
}