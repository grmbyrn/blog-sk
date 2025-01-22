type post = {
	link: string;
	title: string;
	date: Date;
	image: string;
};

export const load = async () => {
	const posts_paths = Object.keys(
		import.meta.glob("/src/routes/post/*/+page.svelte")
	);

	const unsorted_posts: post[] = await Promise.all(
		posts_paths.map(async (path) => {
			const link = path.split("/").at(-2) ?? "";
			const component = await import(
				`../routes/post/${link}/+page.svelte`
			);
			const { title, date, image } = component;
			return { link, title, date, image };
		})
	);

	const posts = unsorted_posts.sort(
		(p, q) => q.date.getTime() - p.date.getTime()
	);
	console.log(posts)
	return { posts };
};
