export type PostMetadata = {
	title: string;
	slug: string;
	contributor: string;
	contributorSlug: string;
	date: string;
	coverImage: string;
	excerpt: string;
	tags: string[];
};

export const postsMetadata: Record<string, PostMetadata> = {
	'live-demo-beta-v3': {
		title: 'Announcing the Beta v3.0.0 Live Demo',
		slug: 'live-demo-beta-v3',
		contributor: 'Jose Celano',
		contributorSlug: 'jose-celano',
		date: '2023-12-15T12:08:04.295Z',
		coverImage: '/images/posts/rust-crab-happy.jpg',
		excerpt:
			"We will release a new major version v3.0.0. We want the community to test it before the final release while it's still in Beta. You can contribute to make Torrust better.",
		tags: ['Announcement', 'Demo', 'Documentation']
	},
	'how-to-contribute-to-this-site': {
		title: 'How To Contribute To This Site',
		slug: 'how-to-contribute-to-this-site',
		contributor: 'Jose Celano',
		contributorSlug: 'jose-celano',
		date: '2023-04-22T21:55:15.361Z',
		coverImage: '/images/posts/sample-post.jpg',
		excerpt: 'How to manage existing blog posts and create new ones on this site.',
		tags: ['Documentation']
	},
	'what-is-a-bittorent-tracker': {
		title: 'What is a BitTorrent tracker and types of trackers',
		slug: 'what-is-a-bittorent-tracker',
		contributor: 'Jose Celano',
		contributorSlug: 'jose-celano',
		date: '2023-10-05T13:42:25.671Z',
		coverImage: '/images/posts/tracker.jpg',
		excerpt:
			'Basic explanation of what a BitTorrent tracker is and the two types of trackers, public and private.',
		tags: ['Torrent', 'Tracker', 'BitTorrent']
	}
};

export async function getAllPostsMetadata(): Promise<PostMetadata[]> {
	return Object.values(postsMetadata);
}
