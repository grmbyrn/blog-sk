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
			try {
				// Dynamically import the component and extract metadata
				const component = await import(`../routes/post/${link}/+page.svelte`);
				const { title, date, image } = component;

				// Validate `date`
				const validDate = new Date(date);
				if (isNaN(validDate.getTime())) {
					throw new Error(`Invalid date in post: ${link}`);
				}

				return { link, title, date: validDate, image };
			} catch (error) {
				console.error(`Error processing post at path: ${path}`, error);
				return { link, title: "Unknown Title", date: new Date(0), image: "" };
			}
		})
	);

	// Sort posts by date
	const posts = unsorted_posts.sort(
		(p, q) => q.date.getTime() - p.date.getTime()
	);

	return { posts };
};
