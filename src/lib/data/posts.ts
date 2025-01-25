interface MarkdownPost {
	metadata: {
		title: string;
		date: string;
		image: string
	};
	default: string;
}

export const fetchPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.svelte');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as MarkdownPost;
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	return allPosts;
};