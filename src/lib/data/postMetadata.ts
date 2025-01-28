export const postsMetadata: {
	[key: string]: {
		title: string;
		slug: string;
		contributor: string;
		contributorSlug: string;
		date: string;
		image: string;
		excerpt: string;
		tags: string[];
	};
} = {
	'first-post': {
		title: 'First Post',
		slug: 'first-post',
		contributor: 'Jose Celano',
		contributorSlug: 'jose-celano',
		date: '2023-04-22T21:55:15.361Z',
		image:
			'https://plus.unsplash.com/premium_photo-1736798695947-2c7661f72bc8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		excerpt: 'This is the first post.',
		tags: []
	},
	'how-to-contribute-to-this-site': {
		title: 'How To Contribute To This Site',
		slug: 'how-to-contribute-to-this-site',
		contributor: 'Jose Celano',
		contributorSlug: 'jose-celano',
		date: '2023-04-22T21:55:15.361Z',
		image: '/images/posts/sample-post.jpg',
		excerpt: 'How to manage existing blog posts and create new ones on this site.',
		tags: ['Documentation']
	}
	// Add more posts here
};
